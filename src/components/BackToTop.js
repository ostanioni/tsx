import React, { useState, useRef, useEffect } from 'react';
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
    onClick: props.onClick,
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
// function scrollHandler1(bttHtmlEl:(HTMLSpanElement | null), setVisibility: (isVisible:boolean)=>void):void { 
//   if ( bttHtmlEl ) {
//     window.pageYOffset > 50 ? setVisibility(true): setVisibility(false);
//   } else {
//     console.error('BackToTop is null.');
//   }
// }
// btt Component
const BackToTop = () => {
    const [isVisible, setVisibility] = useState(false);
    const bttEl = useRef(null);
    function scrollHandler() {
        var bttHtmlEl = bttEl.current;
        if (bttHtmlEl) {
            window.pageYOffset > 50 ? setVisibility(true) : setVisibility(false);
        }
        else {
            console.error('BackToTop is null.');
        }
    }
    useEffect(() => {
        // anything = null;
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { "width": "100%", "height": "100vh", "border": "1px solid red", } }, "kfdlkdlkd"),
        React.createElement("div", { style: { "width": "100%", "height": "100vh", "border": "1px solid red", } }, "kfdlkdlkd"),
        React.createElement(BTTStyled, { ref: bttEl, onClick: toTop, className: isVisible ? '' : 'is-hide' },
            React.createElement(IconStyled, null,
                React.createElement("path", { d: "M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z" })))));
};
export default BackToTop;
