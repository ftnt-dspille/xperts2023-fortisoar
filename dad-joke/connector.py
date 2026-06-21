from connectors.core.connector import Connector, ConnectorError
from .operations import check_health, random_joke, joke_by_id, search_jokes

operations = {
    "random_joke": random_joke,
    "joke_by_id": joke_by_id,
    "search_jokes": search_jokes,
}


class DadJokeConnector(Connector):

    def execute(self, config, operation, params, **kwargs):
        action = operations.get(operation)
        if action:
            return action(config, params)
        raise ConnectorError(f"Unknown operation: {operation}")

    def check_health(self, config):
        return check_health(config)
