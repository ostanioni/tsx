import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {arrowCircleUp} from './svg/icons/awesome';

//  innerSvgProps
interface innerSvgProps {
  readonly width: string;
  readonly alt?: string;
};
// svg for btt
const IconStyled = styled.svg.attrs<innerSvgProps>(props=>({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox:"0 0 512 512",
  width: props.width || "2.5rem",
  alt: props.alt || "Up",
}))`
  &>path {
    fill: ${props=>props.theme.colors.dark};
  }
`
// btts - btt styled
interface bttsProps {
  readonly onClick: typeof toTop;
  readonly id: string;
}
// BTT - back to top
const BTTStyled = styled.span.attrs<bttsProps>(props=>({
  onClick: props.onClick,
  id: props.id,
}))`
  position: fixed;
  cursor: pointer;
  bottom: 2.5rem;
  right: 2.5rem;
  &.is-hide {
  right: -2.5rem;
}
transition: right 0.5s;
`;

function toTop():void {
    window.scrollTo(0,0);
}

// function scrollHandler1(bttHtmlEl:(HTMLSpanElement | null), setVisibility: (isVisible:boolean)=>void):void { 
//   if ( bttHtmlEl ) {
//     window.pageYOffset > 50 ? setVisibility(true): setVisibility(false);
//   } else {
//     console.error('BackToTop is null.');
//   }
// }

// btt Component
const BackToTop: React.FC = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const iconEl = useRef<HTMLDivElement>(null);
  function scrollHandler(): void { 
     var iconHtmlEl: HTMLDivElement | null = iconEl.current;
    if ( iconHtmlEl ) {
      window.pageYOffset > 50 ? setVisibility(true): setVisibility(false);
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
    <>
      <Icon icon={arrowCircleUp} color="red" width="2.5rem" onClick={toTop} ref={iconEl} />
    </>
    
  )
}
export default BackToTop;

