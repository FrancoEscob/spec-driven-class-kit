"""Check no-overwrite and dry-run behavior in isolated directories."""
import tempfile
import unittest
from pathlib import Path
from install_skills import install

class InstallerTests(unittest.TestCase):
    def test_dry_run_leaves_project_untouched(self):
        with tempfile.TemporaryDirectory() as tmp:
            self.assertEqual(len(install(tmp,'codex')),10)
            self.assertEqual(list(Path(tmp).iterdir()),[])

    def test_installs_complete_skills_for_both_agents(self):
        for agent,config in [('codex','.agents'),('claude','.claude')]:
            with self.subTest(agent=agent), tempfile.TemporaryDirectory() as tmp:
                installed = install(tmp,agent,True)
                self.assertEqual(len(installed),10)
                skill = Path(tmp)/config/'skills/no-tecnico'
                self.assertTrue((skill/'references/ejemplo-tutorias.md').is_file())
                self.assertTrue((skill/'agents/openai.yaml').is_file())

    def test_conflict_does_not_change_any_existing_file(self):
        with tempfile.TemporaryDirectory() as tmp:
            existing=Path(tmp)/'.agents/skills/no-tecnico'
            existing.mkdir(parents=True)
            marker=existing/'SKILL.md';marker.write_text('custom version')
            with self.assertRaises(ValueError): install(tmp,'codex',True)
            self.assertEqual(marker.read_text(),'custom version')
            self.assertEqual([p.name for p in existing.parent.iterdir()],['no-tecnico'])

    def test_symlink_destination_is_rejected(self):
        with tempfile.TemporaryDirectory() as tmp, tempfile.TemporaryDirectory() as external:
            (Path(tmp)/'.agents').symlink_to(external,target_is_directory=True)
            with self.assertRaises(ValueError): install(tmp,'codex',True)
            self.assertEqual(list(Path(external).iterdir()),[])

if __name__ == '__main__': unittest.main()
