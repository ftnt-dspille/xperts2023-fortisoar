# Tests — pytest example

This sample uses **pytest** with the `responses` library to mock HTTP traffic.
Mocked vs live is split by **markers**, not filenames:

- **Mocked** (default, offline, runs in CI): `pytest -m "not live"`
- **Live** (hits icanhazdadjoke.com): copy `.env.example` → `.env`, fill in
  `SERVER_URL` and `USER_AGENT`, then `pytest -m live`

From VSCode: right-click the connector → **Run Tests (Mocked)** or **Run Tests (Live)**.
Set `fortisoar.testFramework` to `pytest` (the default) to make the runner pick this layout.

## Layout

- `conftest.py` — adds the repo root to `sys.path` and exposes `config` and
  `mocked_config` fixtures.
- `pytest.ini` — declares the `live` marker so `pytest -m live` is precise and
  unmarked tests don't get skipped.
- Connector package is imported via `importlib.import_module("dad-joke.operations")`
  because Python doesn't allow dashes in module names.
- `.env` is gitignored — real credentials never get committed.
