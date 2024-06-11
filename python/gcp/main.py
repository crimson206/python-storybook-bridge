from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from python_storybook.core import StoryHub, Story
from typing import List
import os

from core_stories import story_manager

StoryHub.register(story_manager=story_manager)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class GetTitlesReturn(BaseModel):
    titles: List[str]


class GetStoryFullPathsReturn(BaseModel):
    story_full_paths: List[str]


@app.get("/titles", response_model=GetTitlesReturn)
async def get_titles():
    titles = StoryHub.get_titles()
    return GetTitlesReturn(titles=titles)


# @app.get('/changes')


@app.get("/all_story_full_paths", response_model=GetStoryFullPathsReturn)
async def get_all_story_full_paths():
    paths = StoryHub.get_all_story_full_paths()
    return GetStoryFullPathsReturn(story_full_paths=paths)


class GetStoryInput(BaseModel):
    story_full_paths: str


@app.post("/story", response_model=Story)
async def get_story(story_path_full_path: GetStoryInput):
    story = StoryHub.get_story(story_path_full_path.story_full_paths)
    return story


@app.get("/register_managers", response_model=str)
async def registor_managers():
    StoryHub.register_story_managers(directory=os.getcwd())
    return "any string"


@app.get("/api-schema")
async def get_api_schema():
    return app.openapi()


class SimpleProps(BaseModel):
    arg1: int = 1
    arg2: int = 2


class SimpleOutProps(BaseModel):
    output: int


@app.post('/simple', response_model=SimpleOutProps)
async def with_default(inputs: SimpleProps):
    return SimpleOutProps(output=inputs.arg1+inputs.arg2)

## uvicorn main:app --host 0.0.0.0 --port 8080
## uvicorn main:app --host 0.0.0.0 --port 8080 --reload
