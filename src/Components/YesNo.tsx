import React from 'react';
import { Input, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface YesNoProps {
  question: string | undefined;
  qualify: boolean  | undefined
}

const YesNo: React.FC<YesNoProps> = ({question, qualify}) => {

  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  
  };

  return (
    <>
        <div className='mb-6'>
            <label htmlFor=""  className='text-sm font-semibold px-2'>Question</label>
            <Input placeholder="Type here" value={question} style={{height: 50, marginTop: 2}}/>
        </div>
        <Checkbox onChange={onChangeCheckbox} checked={qualify} className='text-[12px] mb-6'>Disqualified if the answer is no</Checkbox>
    </>
  )
}

export default YesNo