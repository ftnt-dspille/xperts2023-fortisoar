"""Shared pytest fixtures for the Dad Joke connector tests.

Bootstraps sys.path so the connector package (whose folder name contains a
dash) is importable from tests via importlib.
"""
import os
import sys

import pytest
from dotenv import load_dotenv

TESTS_DIR = os.path.dirname(__file__)
REPO_ROOT = os.path.abspath(os.path.join(TESTS_DIR, os.pardir))
if REPO_ROOT not in sys.path:
    sys.path.insert(0, REPO_ROOT)

load_dotenv(os.path.join(TESTS_DIR, ".env"))

CONNECTOR_FOLDER = "dad-joke"


@pytest.fixture
def config():
    """Real config loaded from .env — used by live tests."""
    return {
        "server_url": os.environ.get("SERVER_URL", ""),
        "user_agent": os.environ.get("USER_AGENT", ""),
    }


@pytest.fixture
def mocked_config():
    """Stable placeholder config — used by mocked tests."""
    return {
        "server_url": "https://example.test",
        "user_agent": "FortiSOAR Dad Joke Sample (test)",
    }
