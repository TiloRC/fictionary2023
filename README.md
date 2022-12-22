# fictionary2023

fictionary.net would be a wordle-like game based on the game https://en.wikipedia.org/wiki/Fictionary.  Each day there's a new obscure word, and the game is to identify which out of 5 definitions is correct.

Running the API
---------------

The API has a couple of dependencies. First, you need to set up a python virtual environment in the api folder:

```bash
cd api
mkdir .venv
python3 -m venv .venv
```

After creating a virtual environment, activate it:

```bash
source .venv/bin/activate
```
Now that the environment is active, you can install the dependencies. All python is currently written in 3.10.1, but that may be upgraded to 3.11 in the future.

Install fastapi and uvicorn:

```bash
pip install fastapi
pip install uvicorn
```

Now, run the API via uvicorn:
```bash
uvicorn api:app --reload
```

You should be able to access the API via an internet browser. The application will tell you the local IP it's hosted on.
## Running React

While at "fictionary2023/react-app/my-app/" run the following code in terminal to start a local react server:

```bash
npm start
```




Open http://localhost:3000 to view website in your browser.
