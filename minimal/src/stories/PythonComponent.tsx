import React from 'react'
import { DefaultApi, WithTypehintInput, WithTypehintOut } from './typescript-client';
import { Configuration } from './typescript-client';
import CodeBlock from './CodeBlock';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// API 구성 설정
const configuration = new Configuration({basePath:"http://localhost:8080"})

// API 인스턴스 생성
const apiInstance = new DefaultApi(configuration);

interface WithTypehintInputPatch extends WithTypehintInput {
    arg3: "A" | "B"
}


export const defaultProps = {
    arg1: "Sample String",
    arg2: ["List", "of", "Strings"],
    arg3: "A",
    arg4: "A",
  }

export const PythonComponent: React.FC<WithTypehintInputPatch> = ({
    arg1= "Sample String",
    arg2= ["List", "of", "Strings"],
    arg3= "A",
    arg4= "A",
  }) => {
    const inputProp = {arg1, arg2, arg3, arg4}
    const [response, setResponce] = React.useState<WithTypehintOut>()
 
   const handleClick = () => {
     apiInstance.processInputProcessInputPost(inputProp).then((response) => {
       console.log("API 호출 결과:", response.data.body);
       setResponce(response.data)
     }).catch((error) => {
       console.error("API 호출 중 오류 발생:", error);
     });
   }
    
     const source = `def with_typehint(\n    arg1: str,\n    arg2: Optional[List[str]],\n    arg3: Literal["A", "B"],\n    arg4: Union[str, Literal["A", "B"]],\n) -> Dict[str, Any]:\n    \'\'\'Some Documentation.\'\'\'\n    return {"string": [1, "another string"]}\n`
   
     return <div>
        <button onClick={handleClick}>Submit</button>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Result</AccordionSummary>
            <AccordionDetails>
                <CodeBlock language='json'>{JSON.stringify(response, null, 2)}</CodeBlock>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Source Code</AccordionSummary>
            <AccordionDetails>
                <CodeBlock language='python'>{source}</CodeBlock>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}> Args</AccordionSummary>
            <AccordionDetails>
                <CodeBlock language='json'>{JSON.stringify(inputProp, null, 2)}</CodeBlock>
            </AccordionDetails>
        </Accordion>
        </div>
     // return <p>Welcome!</p>
 }

 export default PythonComponent