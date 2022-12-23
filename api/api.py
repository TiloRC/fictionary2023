from structures import Game

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
game: Game = None

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

@app.get('/game/{seed}')
def read_game():
    return game.get_game()

# Dependencies: fastapi, uvicorn