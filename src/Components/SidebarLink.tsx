import React from 'react';
// import { Children } from 'react';
import { SidebarLinkProps} from '../models';

const SidebarLink = ({children, clicked,  ...props}:SidebarLinkProps) => {
  return (
    <div>
        <div className={`flex justify-center cursor-pointer py-3 hover:bg-brand-primary rounded-xl ${clicked ? 'bg-brand-primary': ''}`}>
            {children}
        </div>
    </div>
  )
}

export default SidebarLink