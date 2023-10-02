import React,{useState, ChangeEvent, useEffect} from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Question from './Question';
import SwitchHIdeShow from './SwitchHIdeShow';
import Profile from './Profile';
import AdditionalQuestion from './AdditionalQuestion';
import { AppApiResponseData, QuestionContent } from '../models';
import QuestionLayout from './QuestionLayout';



interface ApplicationFormData {
    
    data: AppApiResponseData
    
  }



const ApplicationForm: React.FC = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState<string | null >(null);
  const [elements, setElements] = useState<Boolean>(false);
  const [data, setData] = useState<ApplicationFormData | null>(null);
 

  const [showEditable, setShowEditable] = useState<boolean>(false)


    const handleEdit = (e: any) => {
        setShowEditable(true)
    
    }

    const [personalQuestionsData, setPersonalQuestionsData] = useState<QuestionContent[]  >()
    const [personalQuestion, setPersonalQuestion] = useState<QuestionContent | undefined>()
    const [select, setSelect] = useState<string>('')
    const [choices, setChoices] =useState<string[]>([])
    
    

  const apihttp = process.env.REACT_APP_API_URL;
  const appVersion = process.env.REACT_APP_API_GET_VERSION;
  const appProgramId = process.env.REACT_APP_API_GET_PROGRAMID
  
  useEffect( () => {
    
     // Define the API endpoint URL
     const apiUrl = `${apihttp}/api/${appVersion}/programs/${appProgramId}/application-form`;

     
     // Make a GET request to the API endpoint
     fetch(apiUrl)
       .then((response) => {
         
         // Check if the response status is OK (status code 200)
         if (!response.ok) {
           console.log(`HTTP error! Status: ${response.status}`);
         }
         return response.json();
       })
       .then((responseData: ApplicationFormData) => {
         // Handle the API response data
         setData(responseData);
         
         setPersonalQuestionsData(responseData?.data.attributes.personalInformation.personalQuestions)
         console.log(responseData?.data.attributes.personalInformation.personalQuestions)
         console.log(responseData)
       })
       .catch((error) => {
         // Handle errors
         console.log(error);
         
       });
    
  },[apihttp, appProgramId, appVersion])
  


  const addElement = () => {
    console.log('me     ')
    setElements(true);
  };

  

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        console.log(selectedFile)
        setSelectedFile(file);
        const objectURL = URL.createObjectURL(file);
        setFilePath(objectURL);
        
      }
    
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };


  const handleInputChange = (e:any) => {

    const questionData:  QuestionContent  = {
        id: data?.data.id, 
        type: select,
        question: '',
        choices: choices,
        maxChoice:0,
        disqualify: false,
        other: false,
        [e.target.name]: e.target.value,
    }
    setPersonalQuestion(questionData)
    console.log(personalQuestion)
  }

  
  

  

  return (
    <div className='pt-16 pl-32 w-full box-border ' >
        <div className='w-[450px] bg-transparent'>
            <div className=' mb-24 shadow-brand-shadow-three w-full h-[300px]  bg-transparent  rounded-t-xl'>
                <div className='py-4 px-8 bg-[#D0F7FA] text-lg text-black font-bold font-poppins rounded-t-xl'><p>Upload cover image </p></div>
                <div className='flex items-center justify-center w-full h-[80%] px-6 py-8'>
                    <div className='w-full h-full'>
                        <div className="flex items-center justify-center w-full h-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center relative justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 absolute top-0 bottom-0 left-0 right-0" >
                                    <svg className={`w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 ${filePath ? 'hidden':''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className={`mb-2 text-sm text-gray-500 dark:text-gray-400 ${filePath ? 'hidden':''}`}><span className="font-semibold text-black text-sm">Upload cover Image</span></p>
                                    <p className={`text-xs text-gray-500 dark:text-gray-400 ${filePath ? 'hidden':''} text-[#979797] text-sm`}>16:9 is recommended. Max Image size 1mb</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                                {filePath && <img src={filePath} alt="avatar" className='w-full h-full' />}
                            </label>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='mb-24 shadow-brand-shadow-three w-full bg-transparent  rounded-xl'>
                <div className='py-4 px-8 bg-[#D0F7FA] text-base text-black font-bold font-poppins rounded-t-xl'><p>Personal Information </p></div>
                <div className='flex items-center justify-center w-full px-6 '>
                    <div className='w-full'>
                        <div className=' w-full px-2'>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <p className='text-black text-base font-semibold '>First Name</p>
                            </div>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <p className='text-black text-base font-semibold '>Last Name</p>
                            </div>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <p className='text-black text-base font-semibold '>Email</p>
                            </div>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <div  className='flex items-center justify-between'>
                                    <span className='flex gap-1 items-center'>
                                        <span className='text-black text-base font-semibold ' >Phone</span>
                                        <span className='font-light text-[12px]'>(without dialing code)</span>
                                    </span>
                                    <div className='flex items-center gap-12'>
                                        <Checkbox onChange={onChange} checked={data?.data.attributes.personalInformation.phoneNumber.internalUse} className='text-[12px]'>Internal</Checkbox>
                                        <span className='flex items-center gap-1'>
                                            <SwitchHIdeShow status={data?.data.attributes.personalInformation.phoneNumber.show}/>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <div  className='flex items-center justify-between'>
                                    <span className='flex gap-1 items-center'>
                                        <span className='text-black text-base font-semibold ' >Nationality</span>
                                        
                                    </span>
                                    <div className='flex items-center gap-12'>
                                        <Checkbox onChange={onChange} checked={data?.data.attributes.personalInformation.nationality.internalUse} className='text-[12px]'>Internal</Checkbox>
                                        <span className='flex items-center gap-1'>
                                            <SwitchHIdeShow status={data?.data.attributes.personalInformation.nationality.show}/>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <div  className='flex items-center justify-between'>
                                    <span className='flex gap-1 items-center'>
                                        <span className='text-black text-base font-semibold font-poppins ' >Current Residence</span>
                                        
                                    </span>
                                    <div className='flex items-center gap-12'>
                                        <Checkbox onChange={onChange} checked={data?.data.attributes.personalInformation.currentResidence.internalUse} className='text-[12px]'>Internal</Checkbox>
                                        <span className='flex items-center gap-1'>
                                            <SwitchHIdeShow status={data?.data.attributes.personalInformation.currentResidence.show}/>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <div  className='flex items-center justify-between'>
                                    <span className='flex gap-1 items-center'>
                                        <span className='text-black text-base font-semibold font-poppins'>ID Number</span>
                                        
                                    </span>
                                    <div className='flex items-center gap-12'>
                                        <Checkbox onChange={onChange} checked={data?.data.attributes.personalInformation.idNumber.internalUse} className='text-[12px]'>Internal</Checkbox>
                                        <span className='flex items-center gap-1'>
                                            <SwitchHIdeShow status={data?.data.attributes.personalInformation.idNumber.show}/>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className='pb-6 pt-4 border-b w-full '>
                                <div  className='flex items-center justify-between'>
                                    <span className='flex gap-1 items-center'>
                                        <span className='text-black text-base font-semibold font-poppins ' >Date of Birth</span>
                                        
                                    </span>
                                    <div className='flex items-center gap-12'>
                                        <Checkbox onChange={onChange} checked={data?.data.attributes.personalInformation.dateOfBirth.internalUse} className='text-[12px]'>Internal</Checkbox>
                                        <span className='flex items-center gap-1'>
                                            <SwitchHIdeShow status={data?.data.attributes.personalInformation.dateOfBirth.show}/>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className='pb-6 pt-4 w-full '>
                                <div  className='flex items-center justify-between'>
                                    <span className='flex gap-1 items-center'>
                                        <span className='text-black text-base font-semibold font-poppins'>Gender</span>
                                        
                                    </span>
                                    <div className='flex items-center gap-12'>
                                        <Checkbox onChange={onChange} className='text-[12px]' checked={data?.data.attributes.personalInformation.gender.internalUse}>Internal</Checkbox>
                                        <span className='flex items-center gap-1'>
                                            <SwitchHIdeShow status={data?.data.attributes.personalInformation.gender.show}/>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            {personalQuestionsData?.map((eachQuestion: QuestionContent, index) => {
                                return (
                                    <>
                                        <QuestionLayout key={eachQuestion.id} handleEdit={handleEdit} eachQuestion={eachQuestion} showEditable={showEditable}/>
                                    </>
                                    

                                )
                            })}
                            {elements && <Question question={personalQuestion} onChange={handleInputChange} selectChange={setSelect} setChoiceList={setChoices}/>}
                            
                            <div className='pb-6 pt-4 w-full flex'>
                                <div  className='flex items-center justify-between cursor-pointer' onClick={addElement}>
                                    <span className='flex gap-1 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 25 24" fill="none">
                                            <path d="M2.42465 11.9094L1 11.9183L12.8925 11.8456L24.7851 11.773" stroke="black" stroke-width="5"/>
                                            <path d="M12.7915 2.51806L12.7838 1.0934L12.8466 12.986L12.8466 24" stroke="black" stroke-width="5"/>
                                        </svg>
                                        <span className='text-black text-sm font-semibold font-poppins'  >Add Question</span>
                                        
                                    </span>
                                    
                                </div>
                                
                            </div>
                           
                        </div>
    
                      
                    </div>
                </div>
            </div>
            <Profile resume={data?.data.attributes.profile.resume} experience={data?.data.attributes.profile.experience} education={data?.data.attributes.profile.education} profileQuestions={data?.data.attributes.profile.profileQuestions}/>
            <AdditionalQuestion customizedQuestions={data?.data.attributes.customisedQuestions}/>
        </div>
    </div>
  )
}

export default ApplicationForm