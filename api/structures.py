from typing import Protocol

class Database(Protocol):
    
    def get_pair(self) -> tuple[str, str]:
        ...

    def get_fake_definitions(self, seed: int, count: int = 3) -> list[str]:
        ...

    def validate_pair(self, key, value) -> bool:
        ...
