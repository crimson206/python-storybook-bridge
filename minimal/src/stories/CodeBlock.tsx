import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // 기본 하이라이트 스타일

// 사용 예:
// <CodeBlock code={`def hello_world():
//     print("Hello, world!")`} language="python" />

// Python 코드 예시
const pythonCode = `def hello_world():
    print("Hello, world!")`;

// 코드 하이라이트 처리
const highlightedCode = hljs.highlight(pythonCode, { language: 'python' }).value;

// 이제 highlightedCode를 웹 컴포넌트로 전달하여 렌더링 할 수 있습니다.
console.log(highlightedCode);


interface CodeBlockProps {
    children: string;
    language: string;
}

const CodeBlock = ({ children="def function():\n\n", language='python' }) => {
    const highlightedCode = hljs.highlight(children, { language }).value;

    return (
        <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    );
};

export default CodeBlock;

