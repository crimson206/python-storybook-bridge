import React, { useState} from 'react'
import { DefaultApi, Configuration, GetStoryInput, Story, SimpleProps } from './ts-client';  // Adjust the path as necessary

// const apiConfig = new Configuration({ basePath: "http://localhost:8080" });

const apiConfig = new Configuration({ basePath: "https://app1-6mrxxur3vq-ew.a.run.app" });
const titlesApi = new DefaultApi(apiConfig);

export const defaultInput:GetStoryInput = {
    story_full_paths:'Example/add'
}

export const defaultSimple:SimpleProps = {
    arg1:1,
    arg2:2,
}

export const Simple: React.FC<SimpleProps> = (
    defaultSimple
) => {
    return <button/>
}


export const GetStoryStoryPost:React.FC<GetStoryInput> = (
    props
) => {
    const [response, setResponse] = useState<Story|undefined>()

    const handleClick = async () => {
        const response = await titlesApi.getStoryStoryPost(props)
        setResponse(response.data)
    } 
    
    return <div>
                <button onClick={handleClick}>Execute</button>
                <p>{JSON.stringify(response, null, 2)}</p>   
            </div>
}

export default GetStoryStoryPost
