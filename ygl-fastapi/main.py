from fastapi import FastAPI

app = FastAPI()

# localhost:8000
@app.get("/")
async def root():
    return { "message" : "Hello World" }

# localhost:8000/kokam
@app.get("/kokam")
async def root():
    return [
        {
            "id": 1,
            "name": "꼬깜",
            "image": "https://avatars.githubusercontent.com/u/61646760?v=4"
        },
        {
            "id": 2,
            "name": "깜꼬",
            "image": "https://avatars.githubusercontent.com/u/61646760?v=4"
        }
    ]
    # ({ "name" : "Kokam" })

# uvicorn main:app --reload --host=0.0.0.0 --port=8000
