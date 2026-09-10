#!/usr/bin/env python3
"""Package tracked teaching materials, excluding credentials and local state."""
import argparse
import hashlib
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--output', required=True)
args = parser.parse_args()
output = Path(args.output).resolve()
manifest_path = root / 'skills-manifest.json'
manifest = json.loads(manifest_path.read_text())
adaptations = {
    'to-spec': 'Separación de spec y plan, alcance acotado, criterios y dudas explícitos.',
    'grill-with-docs': 'Entrevista y decisiones Markdown sin dependencia de domain-modeling.',
    'grilling': 'Entrevista acotada al producto y compatible con no-tecnico.',
    'grill-me': 'Entrada por archivo a grilling; evita entrevistas duplicadas.',
    'implement': 'Criterios y evidencia, TDD opcional y alcance del ticket.',
    'to-tickets': 'Convención local simple y sin dependencia del setup upstream.',
    'code-review': 'Revisión simplificada contra comportamiento y reglas del proyecto.',
    'tdd': 'Red-green-refactor y eliminación de dependencia codebase-design.'
}
for entry in manifest['skills']:
    entry['adaptation'] = adaptations.get(entry['name'])
if not any(e['name'] == 'no-tecnico' for e in manifest['skills']):
    manifest['skills'].append({'name':'no-tecnico','role':'cross-cutting','upstream':None,'commit':None,'path':'skills/no-tecnico','adaptation':None,'origin':'Original para esta clase'})
for entry in manifest['skills'] + manifest.get('optional_skills', []):
    folder = root / ('optional-skills' if entry.get('role') == 'optional' else 'skills') / entry['name']
    entry['files_sha256'] = {str(p.relative_to(folder)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(folder.rglob('*')) if p.is_file() and '__pycache__' not in p.parts}
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
# Only these paths can enter the downloadable artifact.
files = [root/name for name in ['README.md','AGENTS.md','CONTEXT.md','LICENSES.md','LICENSE-MATT-POCOCK','skills-manifest.json','.gitignore']]
for directory in ['skills','optional-skills','prompts','docs','scripts','demo-en-vivo']:
    files.extend(p for p in (root/directory).rglob('*') if p.is_file() and '__pycache__' not in p.parts and p.suffix != '.pyc')
output.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(output,'w',ZIP_DEFLATED) as archive:
    for file in sorted(files):
        if file.is_symlink():
            raise ValueError('No se empaquetan enlaces simbólicos.')
        archive.write(file, 'sdd-course-kit/'+str(file.relative_to(root)))
print(f'Kit creado: {len(files)} archivos, {len(manifest["skills"])} skills.')
