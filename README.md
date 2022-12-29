# fictionary2023

fictionary.net would be a wordle-like game based on the game https://en.wikipedia.org/wiki/Fictionary.  Each day there's a new obscure word, and the game is to identify which out of 5 definitions is correct.

(https://docs.google.com/drawings/d/1I8_icTFBZM_MzKM1-fs7nDW-LWbkYWiw6U-BY3G8DSE/edit)

# Getting Started 

To get started, clone this repo and then follow the instructions for running the api and the react frontend. You'll need two terminal windows: one for the api and one for the frontend. Make sure each terminal window is in the correct directory, fictionary2023. 

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



Running the React Frontend
--------------------------
### Setting up

Go to https://nodejs.org/en/ and install the latest version of Node. We'll need this so that we can use the npm package manager. 

```bash
npm i -g create-react-app
```
Feel free to omit the "-g"


Then while at "fictionary2023" run the folowing code in your terminal:

the above line of code is probably not necesary but it will ensure that you don't have any dependency issues. 

### Getting things running


=======

While at "fictionary2023/react-app/my-app/" run the following code in terminal to start a local react server:

```bash
npm start
```





Open http://localhost:3000 to view website in your browser.



## Handling Branches
---------------

We want to use branches to keep everything organized and safe.

Our "main" branch is for our final product. We do not change this file directly and it will only be merged with development unless we need to make a hotfix.

Our "development" branch is our primary branch to compile our chages. We make branches off of this branch and, once the sub-branch is functional, we merge it back into development.

You should create a new branch for every feature you try to implement. 

All merging should be done on GitHub. If you do not know how to merge, ask Max to do so for you.


First, you must make a branch from development. 
- In your terminal, run `git checkout development` to switch to the development branch.
    - If it cannot find development, you can click the button in the bottom left of your screen (looks like connect the dots and has words next to it). This will open a dropdown from the top. See if development is there, if not ask Max for help.
- Now that you are on development, you must make a new branch. To do this, run `git checkout -b branch_name`. When doing this, replace branch_name with the name of your branch.
    - When naming a branch, name it something useful (ie. what you will be implementing/fixing/doing on the branch)
- You will be automatically switched to the branch you just made and can start making changes. At this point, any changes you make are local to your machine (so we will not be able to see them on GitHub)


Make changes...


After you make changes, you must add, commit, and push them to the origin.
- In your terminal, you can run `git status` to check which files you have made changes to
- To add your changes, you must run `git add -A`. This will ready all of your changes.
- Next, you must commit your changes and leave a message on what you changed. To do this, run `git commit -m "your message here"`. This will commit your changes and display on GitHub the message your write within the quotes.
    - Please make your message informative as to what was changed or done on the branch
- Finally, you must push your changes to GitHub. To do this, run `git push origin` and your new branch will be added to the repo.

From there, you will want your finished code to be merged with development. Again, if you do not know how to merge, as Max to do so for you.

If you need to do work using the changes you just made that you want merged with development, ask to have them merged before making a new branch. Otherwise, you will not see your changes.

If you have any questions about any of the steps above, ask Max.

p.s. Is this process cumbersome? Yes. Is it necessary for this project? Probably not. Is it what I (Max) did for my real world job? Yes. This is why I want to practice with these hoops to jump through since this may very well be how it is at a real job.

