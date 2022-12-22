from fastapi import FastAPI
from structures import Game

app = FastAPI()
game: Game = None

@app.get('/')
def read_root():
    return {"Welcome to": "Fictionary"}

@app.get('/game/{seed}')
def read_game():
    return game.get_game()

# Dependencies: fastapi, uvicorn