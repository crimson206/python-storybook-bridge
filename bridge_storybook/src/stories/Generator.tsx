import React, { useState} from 'react'
import { DefaultApi, Configuration,GetStoryFullPathsReturn } from './ts-client';

// const apiConfig = new Configuration({ basePath: "http://localhost:8080" });
const apiConfig = new Configuration({ basePath: "https://app1-6mrxxur3vq-ew.a.run.app" });
const titlesApi = new DefaultApi(apiConfig);

export const Titles = () => {
    const [response, setResponse] = useState<any>()

    const handleClick = async () => {
        const response = await titlesApi.getTitlesTitlesGet()
        setResponse(response.data)
    } 
    
    return <div>
                <button onClick={handleClick}>Request Titles</button>
                <p>{JSON.stringify(response, null, 2)}</p>   
            </div>
}

export default Titles