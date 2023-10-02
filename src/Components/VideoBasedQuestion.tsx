import React from 'react';
import { Input, InputNumber, Select } from 'antd';


const { TextArea } = Input;

interface VideoBasedQuestionProps {
    question: string | undefined
}

const VideoBasedQuestion: React.FC<VideoBasedQuestionProps> = ({question}) => {

    const handleSelectChange = (value: string) => {
        console.log(`selected ${value}`);
        
    };

  return (
    <>
        <div className='mb-4'>
            <label htmlFor=""  className='text-sm font-semibold px-2'>Question</label>
            <Input placeholder="Type here" value={question} style={{height: 50, marginTop: 2}}/>
        </div>
        <div className='mb-4'>
            <TextArea rows={4} placeholder="Add Additional Information" maxLength={6} />

        </div>
        <div className='flex items-center mb-6 space-x-4'>
            <InputNumber min={1} max={10} defaultValue={3} style={{height: 40, marginTop: 2, width: '100%'}} />
            <Select
                defaultValue="In (sec/min)"
                style={{ width: '100%', height: 40 , marginTop: 2 }}
                onChange={handleSelectChange}
                options={[
                    { value: 'seconds', label: 'Seconds' },
                    { value: 'minutes', label: 'Minutes' },
                    
                ]}
                placeholder='In (sec/min)'
            />
        </div>
        
    </>
  )
}

export default VideoBasedQuestion