Stars

https://github.com/OpenAPITools/openapi-generator : 20.3k
https://github.com/bcherny/json-schema-to-typescript : 2.8k
https://github.com/glideapps/quicktype : 11.7k
https://github.com/grantila/typeconv: 400


TypeScript에서 사용할 수 있는 스크립트를 자동으로 생성해주는 라이브러리는 여러 가지가 있습니다. 특히, Pydantic 모델의 JSON 스키마를 기반으로 TypeScript 인터페이스를 생성하는 데 유용한 라이브러리들이 있습니다. 몇 가지 대표적인 라이브러리를 소개하겠습니다:

### 1. quicktype

**quicktype**은 JSON 데이터를 TypeScript 인터페이스로 변환하는 강력한 도구입니다. 다양한 입력 형식을 지원하며, Pydantic의 JSON 스키마도 쉽게 변환할 수 있습니다.

- **설치**:
  ```bash
  npm install -g quicktype
  ```

- **사용**:
  ```bash
  quicktype --lang typescript --src schema.json
  ```

### 2. json-schema-to-typescript

**json-schema-to-typescript**는 JSON 스키마를 TypeScript 타입 정의로 변환하는 도구입니다.

- **설치**:
  ```bash
  npm install -g json-schema-to-typescript
  ```

- **사용**:
  ```bash
  json2ts -i schema.json -o types.d.ts
  ```

### 3. typeconv

**typeconv**는 다양한 데이터 형식을 TypeScript 타입으로 변환할 수 있는 도구입니다.

- **설치**:
  ```bash
  npm install -g typeconv
  ```

- **사용**:
  ```bash
  typeconv -s schema.json -t types.d.ts
  ```

### 예제: json-schema-to-typescript 사용

1. **Pydantic 모델의 JSON 스키마 추출**:
   Python 코드에서 Pydantic 모델의 JSON 스키마를 추출하여 파일로 저장합니다.

   ```python
   from typing import List, Optional, Union
   from pydantic import BaseModel
   from typing_extensions import Literal
   import json

   class InputProp(BaseModel):
       arg1: str
       arg2: Optional[List[str]]
       arg3: Literal["A", "B"]
       arg4: Union[str, Literal["A", "B"]]

   # JSON 스키마 추출
   schema = InputProp.schema()

   # JSON 스키마를 파일로 저장
   with open('schema.json', 'w') as f:
       json.dump(schema, f, indent=2)
   ```

2. **json-schema-to-typescript를 사용하여 TypeScript 인터페이스 생성**:

   ```bash
   json2ts -i schema.json -o types.d.ts
   ```

3. **생성된 TypeScript 인터페이스**:
   `types.d.ts` 파일에 생성된 TypeScript 인터페이스는 다음과 비슷할 것입니다.

   ```typescript
   export interface InputProp {
       arg1: string;
       arg2?: string[];
       arg3: 'A' | 'B';
       arg4: string | 'A' | 'B';
   }
   ```

### 전체 과정 예제 코드

위 과정을 전체적으로 보여주는 Python 및 TypeScript 코드 예제입니다.

```python
# Python 코드 (schema.py)
from typing import List, Optional, Union
from pydantic import BaseModel
from typing_extensions import Literal
import json

class InputProp(BaseModel):
    arg1: str
    arg2: Optional[List[str]]
    arg3: Literal["A", "B"]
    arg4: Union[str, Literal["A", "B"]]

# JSON 스키마 추출
schema = InputProp.schema()

# JSON 스키마를 파일로 저장
with open('schema.json', 'w') as f:
    json.dump(schema, f, indent=2)
```

```bash
# TypeScript 인터페이스 생성
json2ts -i schema.json -o types.d.ts
```

```typescript
// TypeScript 코드 (types.d.ts)
export interface InputProp {
    arg1: string;
    arg2?: string[];
    arg3: 'A' | 'B';
    arg4: string | 'A' | 'B';
}
```

이 과정을 통해 Pydantic 모델의 JSON 스키마를 TypeScript 인터페이스로 쉽게 변환할 수 있습니다. `quicktype`, `json-schema-to-typescript`, `typeconv`와 같은 도구를 사용하면 이 작업을 자동화할 수 있습니다.


mkdir ~/.npm-global
npm config set prefix '~/.npm-global'


openapi-generator-cli generate -i api-schema.json -g typescript-axios -o ./ts-client