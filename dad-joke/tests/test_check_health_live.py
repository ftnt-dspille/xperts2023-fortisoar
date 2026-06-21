"""Live pytest example — hits the real icanhazdadjoke.com API.

Run only via `pytest -m live` (or the FortiSOAR "Run Tests (Live)" command).
Skipped by default and in CI.
"""
import importlib

import pytest

from conftest import CONNECTOR_FOLDER

_operations = importlib.import_module(f"{CONNECTOR_FOLDER}.operations")


@pytest.mark.live
def test_check_health_live(config):
    if not config.get("server_url") or not config.get("user_agent"):
        pytest.skip("server_url or user_agent not set in tests/.env")
    assert _operations.check_health(config) is True


@pytest.mark.live
def test_random_joke_live(config):
    if not config.get("server_url") or not config.get("user_agent"):
        pytest.skip("server_url or user_agent not set in tests/.env")
    result = _operations.random_joke(config, {})
    assert "joke" in result
    assert result["joke"]
