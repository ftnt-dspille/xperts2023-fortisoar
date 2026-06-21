"""Mocked pytest example for the Dad Joke connector.

The `responses` library intercepts HTTP traffic at the requests library level
so check_health and the joke operations can be exercised offline. No credentials
needed; CI runs only these.
"""
import importlib

import pytest
import responses

from conftest import CONNECTOR_FOLDER

_operations = importlib.import_module(f"{CONNECTOR_FOLDER}.operations")
_ConnectorError = importlib.import_module("connectors.core.connector").ConnectorError


@responses.activate
def test_check_health_mocked(mocked_config):
    responses.add(
        responses.GET,
        f"{mocked_config['server_url']}/",
        json={"id": "abc", "joke": "Why did the developer go broke? Because they used up all their cache."},
        status=200,
    )
    assert _operations.check_health(mocked_config) is True


@responses.activate
def test_check_health_rejects_unexpected_shape(mocked_config):
    responses.add(
        responses.GET,
        f"{mocked_config['server_url']}/",
        json={"unexpected": True},
        status=200,
    )
    with pytest.raises(_ConnectorError):
        _operations.check_health(mocked_config)


def test_check_health_requires_server_url(mocked_config):
    cfg = {**mocked_config, "server_url": ""}
    with pytest.raises(_ConnectorError):
        _operations.check_health(cfg)


def test_check_health_requires_user_agent(mocked_config):
    cfg = {**mocked_config, "user_agent": ""}
    with pytest.raises(_ConnectorError):
        _operations.check_health(cfg)
