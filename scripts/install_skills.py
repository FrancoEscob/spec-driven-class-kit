#!/usr/bin/env python3
"""Copy the course skills into a project; dry-run by default, never overwrite."""
import argparse
import shutil
from pathlib import Path


def install(target, agent, apply=False, include_tdd=False):
    source = Path(__file__).resolve().parents[1] / 'skills'
    target = Path(target).expanduser().resolve()
    if not target.is_dir():
        raise ValueError('La carpeta de proyecto debe existir.')
    config = target / ('.agents' if agent == 'codex' else '.claude')
    destination = config / 'skills'
    if config.is_symlink() or destination.is_symlink():
        raise ValueError('La carpeta de instalación es un enlace: elegí una carpeta local del proyecto.')
    folders = sorted(p for p in source.iterdir() if p.is_dir() and (p / 'SKILL.md').is_file())
    required = {'setup-franco-skills','grill-with-docs','grilling','grill-me','to-spec','to-tickets','implement','code-review','no-tecnico'}
    if {p.name for p in folders} != required:
        raise ValueError('El paquete base no coincide con las nueve skills de la clase.')
    if include_tdd:
        folders.append(source.parent / 'optional-skills/tdd')
    for folder in folders:
        if not (folder / 'SKILL.md').is_file():
            raise ValueError('Falta una skill requerida en el paquete.')
        if any(p.is_symlink() for p in folder.rglob('*')):
            raise ValueError('El kit contiene un enlace simbólico inesperado.')
    def same_copy(folder, installed):
        if not installed.is_dir() or installed.is_symlink(): return False
        if any(p.is_symlink() for p in installed.rglob('*')): return False
        original = {str(p.relative_to(folder)):p.read_bytes() for p in folder.rglob('*') if p.is_file()}
        copied = {str(p.relative_to(installed)):p.read_bytes() for p in installed.rglob('*') if p.is_file()}
        return original == copied
    conflicts = [p.name for p in folders if ((destination / p.name).exists() or (destination / p.name).is_symlink()) and not same_copy(p,destination / p.name)]
    if conflicts:
        raise ValueError('No se copió ninguna skill. Ya existen: ' + ', '.join(conflicts))
    if apply:
        destination.mkdir(parents=True, exist_ok=True)
        for folder in folders:
            if not (destination / folder.name).exists():
                shutil.copytree(folder, destination / folder.name)
    return [str(destination / folder.name) for folder in folders]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--target', required=True, help='Carpeta existente del proyecto')
    parser.add_argument('--agent', choices=['codex', 'claude'], default='codex')
    parser.add_argument('--apply', action='store_true', help='Copiar; sin esta opción solo muestra el plan')
    parser.add_argument('--with-tdd', action='store_true', help='Incluir TDD como complemento elegido explícitamente')
    args = parser.parse_args()
    try:
        paths = install(args.target, args.agent, args.apply, args.with_tdd)
    except (ValueError, OSError) as error:
        parser.exit(1, str(error) + '\n')
    print('Skills instaladas:' if args.apply else 'Simulación; no se cambió ningún archivo:')
    print('\n'.join(paths))


if __name__ == '__main__':
    main()
