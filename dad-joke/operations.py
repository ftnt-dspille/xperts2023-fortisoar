"""Operation handlers for the Dad Joke sample connector.

Calls the icanhazdadjoke.com REST API. Their docs require:
  - Accept: application/json   (so we get JSON instead of HTML)
  - User-Agent: <something descriptive with a contact URL>
"""
import requests
from connectors.core.connector import ConnectorError, get_logger

logger = get_logger("dad-joke")

TIMEOUT_S = 15


def _session(config):
    server_url = (config.get("server_url") or "").strip()
    user_agent = (config.get("user_agent") or "").strip()
    if not server_url:
        raise ConnectorError("API Base URL is required.")
    if not user_agent:
        raise ConnectorError("User-Agent is required by icanhazdadjoke.com.")
    s = requests.Session()
    s.headers["Accept"] = "application/json"
    s.headers["User-Agent"] = user_agent
    return s, server_url.rstrip("/")


def _get(config, path, params=None):
    session, base = _session(config)
    try:
        resp = session.get(f"{base}{path}", params=params, timeout=TIMEOUT_S)
        resp.raise_for_status()
        return resp.json()
    except requests.RequestException as exc:
        raise ConnectorError(f"Dad Joke API request failed: {exc}")


def check_health(config):
    payload = _get(config, "/")
    if not isinstance(payload, dict) or "joke" not in payload:
        raise ConnectorError("Health check: unexpected response shape from API.")
    logger.debug("dad-joke health check ok")
    return True


def random_joke(config, params):
    return _get(config, "/")


def joke_by_id(config, params):
    joke_id = (params.get("joke_id") or "").strip()
    if not joke_id:
        raise ConnectorError("Joke ID is required.")
    return _get(config, f"/j/{joke_id}")


def search_jokes(config, params):
    query = {}
    term = (params.get("term") or "").strip()
    if term:
        query["term"] = term
    limit = params.get("limit")
    if limit is not None:
        try:
            query["limit"] = max(1, min(30, int(limit)))
        except (TypeError, ValueError):
            raise ConnectorError("Limit must be an integer.")
    return _get(config, "/search", params=query)
