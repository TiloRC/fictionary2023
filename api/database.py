from structures import Database
from random import Random

from json import dumps, loads
from time import time

class Database:
    def __init__(self, data_path: str = "database.json"):
        self.path = data_path
        self.data: dict = None
        self.data = self.load_json(data_path)
    
    def get_raw_pair(self, index: int) -> tuple[str, list[str]]:
        return list(self.data.items())[index]

    def get_pair(self, index: int) -> tuple[str, str]:
        kv_pair = self.get_raw_pair(index)

        return (kv_pair[0], kv_pair[1][0])

    def get_fake_definitions(self, index: int, seed: int = None, count: int = 3) -> list[str]:
        kv_pair = self.get_raw_pair(index)

        vals = kv_pair[1][1:]
        return Random(seed).sample(vals, count)

    def validate_pair(self, key, value) -> bool:
        if key in self.data:
            if value == self.data[key][0]:
                return True

        return False

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
        self.total_entries = len(self.data.keys())

    def days_since_epoch(self) -> int:
        return int(time() // (24 * 60 * 60))
    
    def day_index(self) -> int:
        return self.days_since_epoch() % self.total_entries

    def get_pair(self) -> tuple[str, str]:
        return super().get_pair(self.day_index())

    def get_fake_definitions(self, seed: int = None, count: int = 3) -> list[str]:
        return super().get_fake_definitions(self.day_index(), seed, count)

