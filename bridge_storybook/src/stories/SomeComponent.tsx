import React, { useState} from 'react'
import { DefaultApi, Configuration, SimpleProps, SimpleOutProps } from './ts-client';  // Adjust the path as necessary

// const apiConfig = new Configuration({ basePath: "http://localhost:8080" });
const apiConfig = new Configuration({ basePath: "https://app1-6mrxxur3vq-ew.a.run.app" });
const titlesApi = new DefaultApi(apiConfig);

export const defaultInput:SimpleProps = {arg1:1, arg2:2}

export const withDefaultSimplePost:React.FC<SimpleProps> = (
    inputProps=defaultInput
) => {
    const [response, setResponse] = useState<SimpleOutProps|undefined>()

    const handleClick = async () => {
        const response = await titlesApi.withDefaultSimplePost(inputProps)
        setResponse(response.data)
    } 
    
    return <div>
                <button onClick={handleClick}>Execute</button>
                <p>{JSON.stringify(response, null, 2)}</p>   
            </div>
}

export default withDefaultSimplePost