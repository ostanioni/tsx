import React, {
  useContext,
  
  CSSProperties,
} from 'react';
import {Icon} from './svg/icons/awesome'
import Theme from 'components/MyContext';

const process = require('process');

// ================== NavIcon FunctionComponent========================================
interface NavIconProps {
  filter?: string;
  icon: Icon;
  color: string;
  width: string;
};
// --------------------------------------
const NavIcon: React.FC<NavIconProps> = ({ icon, color, width }) => {
  const value = useContext<string>(Theme);

  const pathStyle: CSSProperties = {
    transition: 'fill 0.5s easy-in-out',
  };
  return (
      <svg  viewBox={icon.viewBox} width={width} xmlns="http://www.w3.org/2000/svg">
        <path d={icon.path} fill={color} style={pathStyle} />
      </svg>
  )
};
// ================================================================================

export default NavIcon;
