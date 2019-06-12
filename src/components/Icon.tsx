import React, {
  useContext,
  useEffect,
  MouseEvent,
  CSSProperties,
} from 'react';
import {Icon} from './svg/icons/awesome'
import Theme from 'components/MyContext';

const process = require('process');

// ================== NavIcon FunctionComponent========================================
interface NavIconProps {
  filter?: string;
  ref?: string | ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
  icon: Icon;
  color: string;
  width: string;
  onClick: ( (event: MouseEvent<HTMLDivElement>)=>void ) | undefined; 
};
// --------------------------------------
const NavIcon: React.FC<NavIconProps> = ({ icon, color, width, onClick, ref }) => {
  const value = useContext<string>(Theme);
  useEffect(() => { console.log(value) })

  const wrapperStyle: CSSProperties = {
    display: 'inline',
    cursor: 'pointer',
    margin: '0.7rem',
    padding: 0,
    border:0,
  };
  const pathStyle: CSSProperties = {
    transition: 'fill 0.5s easy-in-out',
  };
  return (
    <div onClick={onClick} style={wrapperStyle} ref={ref}>
      <svg  viewBox={icon.viewBox} width={width} xmlns="http://www.w3.org/2000/svg">
        <path d={icon.path} fill={color} style={pathStyle} />
      </svg>
    </div>
  )
};
// ================================================================================

export default NavIcon;
