from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Any, Dict, Literal, Optional, Union
from fastapi import FastAPI

def with_typehint(arg1:str, arg2:Optional[List[str]], arg3:Literal["A", "B"], arg4:Union[str, Literal["A", "B"]])->Dict[str,Any]:
    return {"string":[1, "another string"]}

class WithTypehintInput(BaseModel):
    arg1:str
    arg2:Optional[List[str]]
    arg3:Literal["A", "B"]
    arg4:Union[str, Literal["A", "B"]]

class WithTypehintOut(BaseModel):
    body:Dict[str,Any]

app = FastAPI(    title="My Sample API",
    description="This is a sample API to demonstrate basic FastAPI functionality.",
    version="1.0.0",
    terms_of_service="http://example.com/terms/",
    contact={
        "name": "Support Team",
        "url": "http://example.com/contact/",
        "email": "support@example.com"
    },
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
    },
    servers=[
        {"url": "https://ubiquitous-guacamole-rq6px7ww7wwhjgv-8080.app.github.dev", "description": "Primary API server"},
        {"url": "https://development.example.com/api", "description": "Development API server"}
    ]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 도메인에서의 요청을 허용
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메서드를 허용
    allow_headers=["*"]   # 모든 헤더를 허용
)


@app.post("/process_input", response_model=WithTypehintOut)
async def process_input(input_prop: WithTypehintInput):
    output = with_typehint(**input_prop)
    return {"body":output}
