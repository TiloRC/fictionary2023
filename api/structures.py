from typing import Protocol, TypedDict

class GameDict(TypedDict):
    answer: tuple[str, str]
    decoys: tuple[str, str]

class Database(Protocol):  
    def get_game(self) -> tuple[str, str]:
        ...
