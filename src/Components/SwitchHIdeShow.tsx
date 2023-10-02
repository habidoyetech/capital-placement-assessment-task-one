import React, {useState, useEffect} from 'react';
import { Switch } from 'antd';

interface SwitchProps {
  status: boolean | undefined;
}

const SwitchHIdeShow: React.FC<SwitchProps> = ({status}) => {

    
    const [switchValue, setSwitchValue] = useState<string>('show')

    const handleSwitchChange = (event: any) => {
      // Update the isChecked state based on the checkbox's checked property 
      console.log(event)
      if (event) {
        setSwitchValue('show')
      } else {
        setSwitchValue('hide')
      }
    };

    useEffect(() => {
      if (status) {
        setSwitchValue('show')
      }
      if (!status) {
        setSwitchValue('hide')
      }
    }, [])
    
  
    

  return (
    <>
        <Switch size="small" defaultChecked={status} className='border' onClick={handleSwitchChange} />
        <span className='text-[11px]'>{switchValue}</span>
    </>
  )
}

export default SwitchHIdeShow