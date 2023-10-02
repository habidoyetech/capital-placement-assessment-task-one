import React from 'react'

const TopNavigation: React.FC = () => {
  return (
    <div className='h-32 w-[90%] box-border' >
        <div className=' bg-white w-full shadow-brand-shadow-three px-24 relative top-9 left-0'>
            <ul className='flex  w-full'>
                <div className="bg-blue text-lg font-medium text-black hover:text-white after:content-[''] hover:after:w-8 hover:after:h-8 hover:after:absolute hover:after:top-[39%] hover:after:-right-3 hover:after:rotate-45 hover:after:bg-[#00635B] hover:bg-[#00635B] relative py-6 flex items-center">
                    <li className='py-4 border-r hover:border-none cursor-pointer'>
                        <div className='px-20'>
                            Porgram Details
                        </div>
                    </li>
                </div>
                <div className="bg-blue text-lg font-medium text-black hover:text-white after:content-[''] hover:after:w-8 hover:after:h-8 hover:after:absolute hover:after:top-[39%] hover:after:-right-3 hover:after:rotate-45 hover:after:bg-[#00635B] hover:bg-[#00635B] relative py-6 flex items-center">
                    <li className='py-4 border-r hover:border-none cursor-pointer'>
                        <div className='px-20'>
                            Application Form
                        </div>
                    </li>
                </div>
                <div className="bg-blue text-lg font-medium text-black hover:text-white after:content-[''] hover:after:w-8 hover:after:h-8 hover:after:absolute hover:after:top-[39%] hover:after:-right-3 hover:after:rotate-45 hover:after:bg-[#00635B] hover:bg-[#00635B] relative py-6 flex items-center">
                    <li className='py-4 border-r hover:border-none cursor-pointer'>
                        <div className='px-20'>
                            Workflow
                        </div>
                    </li>
                </div>
                <div className="bg-blue text-lg font-medium text-black hover:text-white after:content-[''] hover:after:w-8 hover:after:h-8 hover:after:absolute hover:after:top-[39%] hover:after:-right-3 hover:after:rotate-45 hover:after:bg-[#00635B] hover:bg-[#00635B] relative py-6 flex items-center">
                    <li className='py-4 border-r hover:border-none cursor-pointer'>
                        <div className='px-20'>
                            Details
                        </div>
                    </li>
                </div>
                
            </ul>
        </div>
    </div>
  )
}

export default TopNavigation