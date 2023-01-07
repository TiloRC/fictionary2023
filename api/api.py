from structures import Database
from database import FictionaryDB

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
database: Database = FictionaryDB('sampledb.json')

app.add_middleware(
    CORSMiddleware, 
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/')
def read_root():
    return {"Welcome to": "Fictionary"}

@app.get('/game/pair/')
def read_game() -> tuple[str, str]:
    return database.get_pair()

@app.get('/game/definitions/{seed}')
def read_game(seed: int) -> list[str]:
    return database.get_fake_definitions(seed)

# Dependencies: fastapi, uvicorn