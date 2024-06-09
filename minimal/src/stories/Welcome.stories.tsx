import React from 'react'
import { DefaultApi, WithTypehintInput, WithTypehintOut } from './typescript-client';

// API 구성 설정
const configuration = {
//  basePath: 'https://example.com/api', // API 서버 URL
};

// API 인스턴스 생성
const apiInstance = new DefaultApi();

const inputProp: WithTypehintInput = {
    arg1: "Sample String",
    arg2: ["List", "of", "Strings"],
    arg3: "A",
    arg4: "A",
  };

export default {
    title: "Welcome"
}

export const sMyComponent = () => {
  /**    
   * const [response, setResponce] = React.useState<WithTypehintOut>()

    apiInstance.processInputProcessInputPost(inputProp).then((response) => {
        console.log("API 호출 결과:", response.data.body);
        setResponce(response.data);
      }).catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
    return <p>Welcome!{JSON.stringify(response, null, 2)}</p>
  */


    return <p>Welcome!</p>
}