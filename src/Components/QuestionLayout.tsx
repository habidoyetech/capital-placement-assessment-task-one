import React, {useState} from 'react';
import EditPen from '../Assests/editpen.svg';
import { QuestionContent } from '../models';
import Question from './Question';

interface QuestionLayoutProps {
    eachQuestion: QuestionContent
    handleEdit: React.MouseEventHandler<HTMLImageElement> | undefined;
    showEditable: boolean  
}







const QuestionLayout: React.FC<QuestionLayoutProps> = ({eachQuestion, handleEdit, showEditable}) => {

    const [select, setSelect] = useState<string>('')
    const [choices, setChoices] =useState<string[]>([])

    console.log(select, choices)


  return (
    <>
        {!showEditable && <div className='pb-6 pt-4 w-full border-b'>
            <div  className='flex items-center justify-between'>
                <span className='flex gap-1 items-center'>
                    <span className='text-[#575454] text-xs font-normal font-poppins' >{eachQuestion.type}</span>
                    
                </span>
    
            </div>
            <div className='flex items-center space-x-4 justify-between'>
                <p className='font-semibold text-lg'>{eachQuestion.question}</p>
                <div><img src={EditPen} alt="edit button" onClick={handleEdit} /></div>
            </div>
        </div>}
        {showEditable && <Question question={eachQuestion} selectChange={setSelect} setChoiceList={setChoices}/>}
    </>
  )
}

export default QuestionLayout