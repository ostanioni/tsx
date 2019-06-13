import React, { 
  useState, 
  useRef, 
  useEffect,
  useContext,
  CSSProperties,
} from 'react';
import {ThemeCtx} from 'themes/Theme';
import Icon from 'components/Icon';
import { arrowCircleUp } from './svg/icons/awesome';

// interface IBttProps {
//   ref?: string | ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
//   onClick: ( (event: MouseEvent<HTMLDivElement>)=>void ) | undefined; 
// };
function toTop():void {
    window.scrollTo(0,0);
}
const wrapperStyle: CSSProperties = {
  position: 'fixed',
    bottom: '2.5rem',
     right: '-1.5rem',
   display: 'inline',
    cursor: 'pointer',
    margin: '0',
   padding: '0',
    border: '0',
transition: 'right 0.5s',
};
// btt Component
const BackToTop: React.FC = () => {
  const theme = useContext(ThemeCtx);
  console.log(theme);
  const [isVisible, setVisibility] = useState<boolean>(false);
  const iconEl: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  function scrollHandler(): void { 
     var iconHtmlEl: HTMLDivElement | null = iconEl.current;
    if ( iconHtmlEl ) {
      window.pageYOffset > 70 ? iconHtmlEl.style.right='2.5rem': iconHtmlEl.style.right='-2.5rem';
    } else {
      console.error('BackToTop is null.');
    }
  }
  useEffect( ()=>{
    window.addEventListener('scroll', scrollHandler);
      return ()=>{
        window.removeEventListener('scroll', scrollHandler);
      }        
    }
  )
  return (
    <div onClick={toTop} style={wrapperStyle} ref={iconEl}>
      <Icon icon={arrowCircleUp} color="red" width="2.5rem"/>
    </div>
  )
}
export default BackToTop;

