import React, { useState, useRef, useEffect, } from 'react';
import Icon from 'components/Icon';
import { arrowCircleUp } from './svg/icons/awesome';
// interface IBttProps {
//   ref?: string | ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
//   onClick: ( (event: MouseEvent<HTMLDivElement>)=>void ) | undefined; 
// };
function toTop() {
    window.scrollTo(0, 0);
}
const wrapperStyle = {
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
const BackToTop = () => {
    const [isVisible, setVisibility] = useState(false);
    const iconEl = useRef(null);
    function scrollHandler() {
        var iconHtmlEl = iconEl.current;
        if (iconHtmlEl) {
            window.pageYOffset > 70 ? iconHtmlEl.style.right = '2.5rem' : iconHtmlEl.style.right = '-2.5rem';
        }
        else {
            console.error('BackToTop is null.');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    });
    return (React.createElement("div", { onClick: toTop, style: wrapperStyle, ref: iconEl },
        React.createElement(Icon, { icon: arrowCircleUp, color: "red", width: "2.5rem" })));
};
export default BackToTop;
