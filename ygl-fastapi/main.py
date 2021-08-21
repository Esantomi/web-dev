from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return { "message" : "Hello World" }

# uvicorn main:app --reload --host=0.0.0.0 --port=8000