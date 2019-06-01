import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

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
  onCick: props.onClick,
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

// btt Component props interface
interface bttProps {

}
// btt Component
const BackToTop: React.FC = () => {
  const bttEl = useRef(null);
  useEffect( ()=>{
    function scrollHandler(): void { 
      var bttHtmlEl: HTMLElement | null = bttEl.current;
      if ( bttHtmlEl ) {
        window.pageYOffset > 50 ? bttHtmlEl.classList.remove('is-hide') : bttHtmlEl.classList.add('is-hide')
      } else {
        console.error('BackToTop is null. (scrollHandler)');
      }
    }
    window.addEventListener('scroll', scrollHandler);
      return ()=>{
        window.removeEventListener('scroll', scrollHandler);
      }        
    }
  )
  return (
    <BTTStyled ref={bttEl} onClick={toTop}>
      <IconStyled />
    </BTTStyled>
  )
}
 export default BackToTop;

