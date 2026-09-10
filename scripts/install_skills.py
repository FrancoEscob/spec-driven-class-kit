#!/usr/bin/env python3
"""Copy the course skills into a project; dry-run by default, never overwrite."""
import argparse
import shutil
from pathlib import Path


def install(target, agent, apply=False):
    source = Path(__file__).resolve().parents[1] / 'skills'
    target = Path(target).expanduser().resolve()
    if not target.is_dir():
        raise ValueError('La carpeta de proyecto debe existir.')
    config = target / ('.agents' if agent == 'codex' else '.claude')
    destination = config / 'skills'
    if config.is_symlink() or destination.is_symlink():
        raise ValueError('La carpeta de instalación es un enlace: elegí una carpeta local del proyecto.')
    folders = sorted(p for p in source.iterdir() if p.is_dir() and (p / 'SKILL.md').is_file())
    if len(folders) != 10:
        raise ValueError('El kit debe contener exactamente diez skills completas.')
    for folder in folders:
        if any(p.is_symlink() for p in folder.rglob('*')):
            raise ValueError('El kit contiene un enlace simbólico inesperado.')
    conflicts = [p.name for p in folders if (destination / p.name).exists() or (destination / p.name).is_symlink()]
    if conflicts:
        raise ValueError('No se copió ninguna skill. Ya existen: ' + ', '.join(conflicts))
    if apply:
        destination.mkdir(parents=True, exist_ok=True)
        for folder in folders:
            shutil.copytree(folder, destination / folder.name)
    return [str(destination / folder.name) for folder in folders]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--target', required=True, help='Carpeta existente del proyecto')
    parser.add_argument('--agent', choices=['codex', 'claude'], default='codex')
    parser.add_argument('--apply', action='store_true', help='Copiar; sin esta opción solo muestra el plan')
    args = parser.parse_args()
    try:
        paths = install(args.target, args.agent, args.apply)
    except (ValueError, OSError) as error:
        parser.exit(1, str(error) + '\n')
    print('Skills instaladas:' if args.apply else 'Simulación; no se cambió ningún archivo:')
    print('\n'.join(paths))


if __name__ == '__main__':
    main()
