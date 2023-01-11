from structures import GameDict

from json import dumps, loads
from time import time

class Database:
    def __init__(self, data_path: str = "database.json"):
        self.path = data_path
        self.data: dict = None
        self.data = self.format_data(self.load_json(data_path))
    
    def get_game(self, index: int) -> GameDict:
        return self.data[index]

    @staticmethod
    def format_data(data: dict) -> list[GameDict]:
        out = []

        for day in data:
            ans: list[str, str] = None
            decoys: list[list[str, str]] = []
            for pair in day:
                pair = tuple(pair)
                if ans:
                    decoys.append(pair)
                else:
                    ans = pair
            
            out.append(GameDict(
                answer=ans,
                decoys=decoys
            ))
    
        return out

    @staticmethod
    def load_json(data_path: str) -> dict:
        with open(data_path, 'r') as json_data:
            return loads(json_data.read())
    
    @staticmethod
    def write_json(data: dict, data_path: str) -> None:
        with open(data_path, 'w') as json_data:
            json_data.write(dumps(data))

class FictionaryDB(Database):
    def __init__(self, data_path: str = "database.json"):
        super().__init__(data_path)
        self.total_entries = len(self.data)

    def days_since_epoch(self) -> int:
        return int(time() // (24 * 60 * 60))
    
    def day_index(self) -> int:
        return self.days_since_epoch() % self.total_entries

    def get_game(self, index: int = None) -> GameDict:
        if index is not None:
            return super().get_game(index)

        return super().get_game(self.day_index())
