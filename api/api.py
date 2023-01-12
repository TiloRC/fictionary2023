from structures import Database, GameDict
from database import FictionaryDB

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
database: Database = FictionaryDB('hectoday1.json')

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

@app.get('/game/')
def read_game() -> GameDict:
    return database.get_game()

@app.get('/game/{index}')
def read_game(index: int = None) -> GameDict:
    return database.get_game(index)


# Dependencies: fastapi, uvicorn