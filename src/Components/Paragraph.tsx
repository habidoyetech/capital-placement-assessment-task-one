import React from 'react';
import { Input} from 'antd';

interface ParagraphProps {
  question:string | undefined;
  onChange:React.ChangeEventHandler<HTMLInputElement> |  undefined;
}

const Paragraph: React.FC<ParagraphProps> = ({question, onChange}) => {
  return (
    <>
        <div className='mb-8'>
            <label htmlFor=""  className='text-sm font-semibold px-2'>Question</label>
            <Input placeholder="Type here" name='question' value={question ? question: ''} onChange={onChange} style={{height: 50, marginTop: 2}}/>
        </div>
        
    </>
  )
}

export default Paragraph