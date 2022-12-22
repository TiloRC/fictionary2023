from typing import Protocol

class Database(Protocol):
    
    def get_pair(seed: int) -> tuple[str, str]:
        ...

    def get_definition(seed: int, count: int = 1) -> list[str]:
        ...

    def validate_pair(key, value) -> bool:
        ...


class Game(Protocol):
    def get_game(seed: int) -> dict:
        ...
