from fastapi import FastAPI

app = FastAPI()

# localhost:8000
@app.get("/")
async def root():
    return { "message" : "Hello World" }

# localhost:8000/kokam
@app.get("/kokam")
async def root():
    return ({ "name" : "Kokam" })

# uvicorn main:app --reload --host=0.0.0.0 --port=8000