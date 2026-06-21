"""Mocked pytest example covering the joke operations."""
import importlib

import pytest
import responses

from conftest import CONNECTOR_FOLDER

_operations = importlib.import_module(f"{CONNECTOR_FOLDER}.operations")
_ConnectorError = importlib.import_module("connectors.core.connector").ConnectorError


@responses.activate
def test_random_joke_returns_payload(mocked_config):
    payload = {"id": "abc", "joke": "I'm reading a book about anti-gravity. It's impossible to put down."}
    responses.add(responses.GET, f"{mocked_config['server_url']}/", json=payload, status=200)
    result = _operations.random_joke(mocked_config, {})
    assert result == payload


@responses.activate
def test_joke_by_id(mocked_config):
    payload = {"id": "xyz", "joke": "Did you hear about the claustrophobic astronaut? He just needed a little space."}
    responses.add(responses.GET, f"{mocked_config['server_url']}/j/xyz", json=payload, status=200)
    result = _operations.joke_by_id(mocked_config, {"joke_id": "xyz"})
    assert result["id"] == "xyz"


def test_joke_by_id_requires_id(mocked_config):
    with pytest.raises(_ConnectorError):
        _operations.joke_by_id(mocked_config, {"joke_id": ""})


@responses.activate
def test_search_jokes_clamps_limit(mocked_config):
    responses.add(
        responses.GET,
        f"{mocked_config['server_url']}/search",
        json={"results": [], "total_jokes": 0},
        status=200,
    )
    _operations.search_jokes(mocked_config, {"term": "cat", "limit": 999})
    # icanhazdadjoke caps at 30 — operation should clamp before sending.
    assert "limit=30" in responses.calls[0].request.url


def test_search_jokes_rejects_non_integer_limit(mocked_config):
    with pytest.raises(_ConnectorError):
        _operations.search_jokes(mocked_config, {"limit": "lots"})
