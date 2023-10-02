import React, {useState} from 'react';
import { Input, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { InputNumber } from 'antd';

interface MultipleChoiceProps {
    question: string | undefined;
    choicesList: string[] | undefined;
    otherOption: boolean | undefined;
    maxChoice: number | undefined;
    setChoiceList: React.Dispatch<React.SetStateAction<string[]>>
    
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({question, choicesList, otherOption, maxChoice, setChoiceList}) => {

    const [choices, setChoices ] = useState<string[]>([])
    const [choice, setChoice] = useState<string>('')
    

    const handleChange = (e:any) => {
        setChoice(e.target.value)
        
    }

    const addChoice = () => {
        setChoices([...choices, choice])
        console.log(choices)
        setChoice('')
        setChoiceList([...choices])
    }

    const onChangeCheckbox = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      
    };

    
    

  return (
    <>
        <div className='mb-6'>
            <label htmlFor=""  className='text-sm font-semibold px-2'>Question</label>
            <Input placeholder="Type here" value={question} style={{height: 40, marginTop: 2}}/>
        </div>
        
        <div className='w-full mb-2' >
            <label htmlFor=""  className='text-sm font-semibold px-2'>Choice</label>
            {choicesList?.map((choice: string, index) => {
                return (
                    <div key={index} className='flex items-center space-x-4 w-full  mt-2'>
                        <span className='flex items-center h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 10.5C3.2 10.5 2.5 11.2 2.5 12C2.5 12.8 3.2 13.5 4 13.5C4.8 13.5 5.5 12.8 5.5 12C5.5 11.2 4.8 10.5 4 10.5ZM4 5.5C3.2 5.5 2.5 6.2 2.5 7C2.5 7.8 3.2 8.5 4 8.5C4.8 8.5 5.5 7.8 5.5 7C5.5 6.2 4.8 5.5 4 5.5ZM4 15.5C3.2 15.5 2.5 16.2 2.5 17C2.5 17.8 3.2 18.5 4 18.5C4.8 18.5 5.5 17.8 5.5 17C5.5 16.2 4.8 15.5 4 15.5ZM7.5 6V8H21.5V6H7.5ZM7.5 18H21.5V16H7.5V18ZM7.5 13H21.5V11H7.5V13Z" fill="black"/>
                            </svg>
                        </span>
                        <span className='flex-1 '>
                            <Input placeholder='Type Here' value={choice}  style={{height: 40}}></Input>
                        </span>
                    </div>
                )
            })}
            {choices.map((choice:string, index) => {
                return (
                    <div key={index} className='flex items-center space-x-4 w-full  mt-2'>
                        <span className='flex items-center h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 10.5C3.2 10.5 2.5 11.2 2.5 12C2.5 12.8 3.2 13.5 4 13.5C4.8 13.5 5.5 12.8 5.5 12C5.5 11.2 4.8 10.5 4 10.5ZM4 5.5C3.2 5.5 2.5 6.2 2.5 7C2.5 7.8 3.2 8.5 4 8.5C4.8 8.5 5.5 7.8 5.5 7C5.5 6.2 4.8 5.5 4 5.5ZM4 15.5C3.2 15.5 2.5 16.2 2.5 17C2.5 17.8 3.2 18.5 4 18.5C4.8 18.5 5.5 17.8 5.5 17C5.5 16.2 4.8 15.5 4 15.5ZM7.5 6V8H21.5V6H7.5ZM7.5 18H21.5V16H7.5V18ZM7.5 13H21.5V11H7.5V13Z" fill="black"/>
                            </svg>
                        </span>
                        <span className='flex-1 '>
                            <Input placeholder='Type Here' value={choice}  style={{height: 40}}></Input>
                        </span>
                    </div>
                )
            } )}
            
            
            <div className='flex items-center space-x-4 w-full  mt-2'>
                <span className='flex items-center h-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 10.5C3.2 10.5 2.5 11.2 2.5 12C2.5 12.8 3.2 13.5 4 13.5C4.8 13.5 5.5 12.8 5.5 12C5.5 11.2 4.8 10.5 4 10.5ZM4 5.5C3.2 5.5 2.5 6.2 2.5 7C2.5 7.8 3.2 8.5 4 8.5C4.8 8.5 5.5 7.8 5.5 7C5.5 6.2 4.8 5.5 4 5.5ZM4 15.5C3.2 15.5 2.5 16.2 2.5 17C2.5 17.8 3.2 18.5 4 18.5C4.8 18.5 5.5 17.8 5.5 17C5.5 16.2 4.8 15.5 4 15.5ZM7.5 6V8H21.5V6H7.5ZM7.5 18H21.5V16H7.5V18ZM7.5 13H21.5V11H7.5V13Z" fill="black"/>
                    </svg>
                </span>
                <span className='flex-1 '>
                    <Input placeholder='Type Here' value={choice} onChange={handleChange} style={{height: 40}}></Input>
                </span>
                
                <span className='cursor-pointer ' onClick={addChoice}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M1.77866 6.50924L1 6.51407L7.5 6.47437L14 6.43467" stroke="black" stroke-width="3"/>
                        <path d="M7.44511 1.37627L7.44092 0.59761L7.47526 7.09764L7.47526 13.1175" stroke="black" stroke-width="3"/>
                    </svg>
                </span>

            </div>
            
        </div>
        <Checkbox onChange={onChangeCheckbox} name='other'  defaultChecked={otherOption} className='text-[12px] mb-6'>Enable "Other" option</Checkbox>
        <div className='mb-6 w-full'>
            <label htmlFor=""  className='text-sm font-semibold px-2'>Max Choice Allowed</label>
            
            <InputNumber min={1} max={10} defaultValue={0} name='maxChoice'  value={maxChoice? maxChoice: 0} style={{height: 40, marginTop: 2, width: '100%'}} />
            
        </div>
    </>
  )
}

export default MultipleChoice