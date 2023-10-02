import React, {useState} from 'react';
import EditPen from '../Assests/editpen.svg'
import Question from './Question';
import QuestionLayout from './QuestionLayout';
import { QuestionContent, AdditionalQuestion as AdditionalQuestions } from '../models';

const AdditionalQuestion: React.FC<AdditionalQuestions> = ({customizedQuestions}) => {

        
    const [elements, setElements] = useState<Boolean>(false);
    const [select, setSelect] = useState<string>('')
    const [choices, setChoices] =useState<string[]>([])
    const [showEditable, setShowEditable] = useState<boolean>(false)


    const handleEdit = (e: any) => {
        e.preventDefault()
        setShowEditable(true)
    
    }

    const addElement = () => {
        console.log('me     ')
        setElements(true);
        console.log(select, choices)
    };

  return (
    <>
         <div className='shadow-brand-shadow-three w-full bg-transparent  rounded-xl'>
            <div className='py-4 px-8 bg-[#D0F7FA] text-base text-black font-bold font-poppins rounded-t-xl'><p>Additional Question</p></div>
            <div className='flex items-center justify-center w-full px-6 '>
                <form action="" className='w-full'>
                    <div className=' w-full px-2'>
                        <div className='pb-6 pt-4 w-full border-b'>
                            <div  className='flex items-center justify-between'>
                                <span className='flex gap-1 items-center'>
                                    <span className='text-[#979797] text-sm font-normal font-poppins' >Gender</span>
                                    
                                </span>
                 
                            </div>
                            <div className='flex items-center space-x-4'>
                                <p className='font-semibold text-lg'>Please tell me yourself in less that 500 words</p>
                                <div><img src={EditPen} alt="" /></div>
                            </div>
                        </div>
                        {customizedQuestions?.map((eachQuestion: QuestionContent, index) => {
                                return (
                                    <>
                                        <QuestionLayout key={eachQuestion.id} handleEdit={handleEdit} eachQuestion={eachQuestion} showEditable={showEditable}/>
                                    </>
                                    

                                )
                            })}
                        
                        {elements && <Question selectChange={setSelect} setChoiceList={setChoices}/>}
                        
                        <div className='pb-6 pt-4 w-full flex'>
                            <div  className='flex items-center justify-between cursor-pointer' onClick={addElement}>
                                <span className='flex gap-1 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 25 24" fill="none">
                                        <path d="M2.42465 11.9094L1 11.9183L12.8925 11.8456L24.7851 11.773" stroke="black" stroke-width="5"/>
                                        <path d="M12.7915 2.51806L12.7838 1.0934L12.8466 12.986L12.8466 24" stroke="black" stroke-width="5"/>
                                    </svg>
                                    <span className='text-black text-sm font-semibold font-poppins ' >Add Question</span>
                                    
                                </span>
                                
                            </div>
                            
                        </div>   
                    </div>   
                </form>  
            </div>
        </div>
    </>
  )
}

export default AdditionalQuestion