interface FunctionType {
    arg1: string;
    arg2: string[];
    arg3: 'A' | 'B';
    return: { [key: string]: any };
  }

  const myFucntion = (inputs:FunctionType) => {
    return 1
  }

  const result = myFucntion({arg1:"hi", arg2: ["hi"], arg3: 'A', return: {"Hi":1}})

  interface MyFunctionProps {
	arg1: string; 
	arg2?: string[]; 
	arg3: 'A' |  'B'; 
	arg4: string |  'A' |  'B'; 
}

console.log(result)

const defaultProps: MyFunctionProps = {
    arg1: 'defaultString',
    arg3: 'A',
    arg4: 'A'
};



interface MyFunctionProps2 {
	arg1: string; 
	arg2?: string[]; 
	arg3: 'A' |  'B'; 
	arg4: string |  'A' |  'B'; 
}

interface MyFunctionReturn {
    [key: string]:  any 
}

const MyFunction2 = (
    inputs: MyFunctionProps2 = {
        arg1: 'defaultString',
        arg2: ['default1', 'default2'],
        arg3: 'A',
        arg4: 'B'
    }
): string => {
    return "{ hi: 1 }";
};

const MyFunction = ( inputs: MyFunctionProps2 = {
	arg1: "Hello world", 
	arg2: ['hi', 'buy'], 
	arg3: "A", 
	arg4: "I am boring.", 
}): string => { return "hi" }
