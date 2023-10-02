import React, {useState} from 'react'
import SwitchHIdeShow from './SwitchHIdeShow';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Checkbox from 'antd/es/checkbox';
import Question from './Question';
import { Profile  as ProfileProp }  from '../models';
import { QuestionContent } from '../models';
import QuestionLayout from './QuestionLayout';



const Profile: React.FC<ProfileProp> = ({education, experience, resume, profileQuestions}) => {

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };
    
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
        console.log(choices, select)
    };

  return (
    <>
         <div className='mb-24 shadow-brand-shadow-three w-full bg-transparent  rounded-xl'>
            <div className='py-4 px-8 bg-[#D0F7FA] text-base text-black font-bold font-poppins rounded-t-xl'><p>Profile</p></div>
            <div className='flex items-center justify-center w-full px-6 '>
                <form action="" className='w-full'>
                    <div className=' w-full px-2'>
                        <div className='pb-6 pt-4 border-b w-full '>
                            <div  className='flex items-center justify-between'>
                                <span className='flex gap-1 items-center'>
                                    <span className='text-black text-base font-semibold ' >Education</span>
                                    
                                </span>
                                <div className='flex items-center gap-12'>
                                    <Checkbox onChange={onChange} checked={education?.mandatory} className='text-[12px]'>Mandatory</Checkbox>
                                    <span className='flex items-center gap-1'>
                                        <SwitchHIdeShow status={education?.show} />
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className='pb-6 pt-4 border-b w-full '>
                            <div  className='flex items-center justify-between'>
                                <span className='flex gap-1 items-center'>
                                    <span className='text-black text-base font-semibold ' >Experience</span>
                                    
                                </span>
                                <div className='flex items-center gap-12'>
                                    <Checkbox onChange={onChange} checked={experience?.mandatory} className='text-[12px]'>Mandatory</Checkbox>
                                    <span className='flex items-center gap-1'>
                                        <SwitchHIdeShow status={experience?.show}/>
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className='pb-6 pt-4 border-b w-full '>
                            <div  className='flex items-center justify-between'>
                                <span className='flex gap-1 items-center'>
                                    <span className='text-black text-base font-semibold font-poppins '  >Resume</span>
                                    
                                </span>
                                <div className='flex items-center gap-12'>
                                    <Checkbox onChange={onChange} className='text-[12px]' checked={resume?.mandatory} >Mandotory</Checkbox>
                                    <span className='flex items-center gap-1'>
                                        <SwitchHIdeShow status={resume?.show} />
                                    </span>

                                </div>
                            </div>
                        </div>
                        {profileQuestions?.map((eachQuestion: QuestionContent, index) => {
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

export default Profile