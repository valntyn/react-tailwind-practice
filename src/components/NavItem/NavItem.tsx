import { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../assets/icon-arrow-up.svg';

type PropTypes = {
  text: string;
  children?: React.ReactNode;
};

export const NavItem: React.FC<PropTypes> = ({ text = 'asd', children }) => {
  const [isOpen, setIsOpen] = useState('');

  return (
    <div className="relative">
      <div className="flex space-x-2 cursor-pointer items-center">
        <span 
          className='text-medium-gray hover:text-almost-black'
          onClick={() => children && setIsOpen(text !== isOpen ? text : '')}
        >
          {text}
        </span>
        { children && isOpen !== text && <ArrowDown className='w-[10px] h-[6px]' onClick={() => setIsOpen(text)}/>}
        { children && isOpen === text && <ArrowUp className='w-[10px] h-[6px]' onClick={() => setIsOpen('')}/>}
      </div>
      { isOpen && children }
    </div>
  )
}
