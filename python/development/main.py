from pydantic import BaseModel

from typing import List, Any, Dict, Literal, Optional, Union, get_type_hints

def with_typehint(arg1:str, arg2:Optional[List[str]], arg3:Literal["A", "B"], arg4:Union[str, Literal["A", "B"]])->str:
    return {"string":[1, "another string"]}

from typing import List, Optional, Union
from pydantic import BaseModel
from typing_extensions import Literal  # Literal 타입은 typing_extensions에서 가져옵니다.

class InputProp(BaseModel):
    arg1: str
    arg2: Optional[List[str]]
    arg3: Literal["A", "B"]
    arg4: Union[str, Literal["A", "B"]]

from fastapi import FastAPI

app = FastAPI()

@app.post("/process_input")
async def process_input(input_prop: InputProp):
    # 입력 데이터를 처리합니다.
    return {"received_data": input_prop}