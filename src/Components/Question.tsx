import React, {useState} from 'react';
import { Select, Button } from 'antd';
import Paragraph from './Paragraph';
import MultipleChoice from './MultipleChoice';
import DropDown from './DropDown';
import VideoBasedQuestion from './VideoBasedQuestion';
import YesNo from './YesNo';
import { QuestionContent } from '../models';

interface QuestionProps {
    question?: QuestionContent | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> 
    selectChange: React.Dispatch<React.SetStateAction<string>>
    setChoiceList: React.Dispatch<React.SetStateAction<string[]>>
    
}

const Question: React.FC<QuestionProps> = ({question, onChange, selectChange, setChoiceList}) => {

    const [selectedValue, setSelectedValue] = useState<string | undefined>('')
 
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setSelectedValue(value)
        selectChange(value)
    };


  return (
    <>
        <div className='pb-6 pt-4 w-full '>
            <div  className='w-full'>
                <div className='mb-6'>
                    <label htmlFor=""  className='text-sm font-semibold px-2'>Type</label>
                    <Select
                        defaultValue={question?.type ? question.type : 'paragraph'}
                        style={{ width: '100%', height: 50 , marginTop: 2 }}
                        onChange={handleChange}
                        
                        options={[
                            { value: 'paragraph', label: 'Paragraph' },
                            { value: 'shortanswer', label: 'Short Answer' },
                            { value: 'yesno', label: 'Yes or No' },
                            { value: 'dropdown', label: ' Dropdown' },
                            { value: 'multiplechoice', label: 'Multiple Choice'},
                            { value: 'date', label: 'Date' },
                            { value: 'number', label: 'Number' },
                            { value: 'fileupload', label: 'File Upload' },
                            { value: 'video', label: 'Video' },
                        ]}
                    />
                </div>
                {selectedValue === "" && <Paragraph question={question?.question ? question.question:''} onChange={onChange}/>}
                {selectedValue === "paragraph" && <Paragraph question={question?.question ? question.question:''} onChange={onChange}/>}
                {selectedValue === "shortanswer" && <Paragraph question={question?.question ? question.question:''} onChange={onChange}/>}
                {selectedValue === 'multiplechoice' && <MultipleChoice  setChoiceList={setChoiceList} question={question?.question} choicesList={question?.choices} maxChoice={question?.maxChoice} otherOption={question?.other} />}
                {selectedValue === 'dropdown' && <DropDown setChoiceList={setChoiceList} question={question?.question} choicesList={question?.choices} otherOption={question?.other}/>}
                {selectedValue === 'video' && <VideoBasedQuestion  question={question?.question}/>}
                {selectedValue === "yesno" && <YesNo question={question?.question} qualify={question?.disqualify}/>}
                {selectedValue === "date" && <Paragraph question={question?.question ? question.question:''} onChange={onChange}/>}
                {selectedValue === "number" && <Paragraph question={question?.question ? question.question:''} onChange={onChange}/>}
                {selectedValue === "fileupload" && <Paragraph question={question?.question ? question.question:''} onChange={onChange}/>}

                <div className='flex items-center justify-between '>
                    <span className='flex gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 34 34" fill="none">
                                <path d="M9.55684 9.42862L8.54321 8.42749L17.0039 16.7854L25.4645 25.1434" stroke="#A80000" stroke-width="5"/>
                                <path d="M23.5281 10.1184L24.53 9.10559L16.1651 17.5594L8.37704 25.3474" stroke="#A80000" stroke-width="5"/>
                            </svg>
                        <span className='text-[#A80000] text-sm font-semibold font-poppins ' >Delete Question</span>
                        
                    </span>
                    <span>
                        <Button type="primary" size='large' className='bg-[#087B2F] p-4'>
                            Save
                        </Button>
                    </span>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Question