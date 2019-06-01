import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
;
// svg for btt
const IconStyled = styled.svg.attrs(props => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width || "2.5rem",
    alt: props.alt || "Up",
})) `
  &>path {
    fill: ${props => props.theme.colors.dark};
  }
`;
// BTT - back to top
const BTTStyled = styled.span.attrs(props => ({
    onCick: props.onClick,
    id: props.id,
})) `
  position: fixed;
  cursor: pointer;
  bottom: 2.5rem;
  right: 2.5rem;
  &.is-hide {
    right: -2.5rem;
  }
  transition: right 0.5s;
`;
function toTop() {
    window.scrollTo(0, 0);
}
// btt Component
const BackToTop = () => {
    const bttEl = useRef(null);
    useEffect(() => {
        function scrollHandler() {
            try {
                var bttHtmlEl = bttEl.current;
                if (bttHtmlEl) {
                    window.pageYOffset > 50 ? bttHtmlEl.classList.remove('is-hide') : bttHtmlEl.classList.add('is-hide');
                }
                else {
                    console.error('BackToTop is null. (scrollHandler)');
                }
            }
            catch {
                console.error('');
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    });
    return (React.createElement(BTTStyled, { ref: bttEl, onClick: toTop },
        React.createElement(IconStyled, null)));
};
export default BackToTop;
