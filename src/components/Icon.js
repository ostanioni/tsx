import React from 'react';
// import Theme from 'components/MyContext';
const process = require('process');
;
// --------------------------------------
const NavIcon = ({ icon, color, width }) => {
    // const value = useContext<string>(Theme);
    const pathStyle = {
        transition: 'fill 0.5s easy-in-out',
    };
    return (React.createElement("svg", { viewBox: icon.viewBox, width: width, xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: icon.path, fill: color, style: pathStyle })));
};
// ================================================================================
export default NavIcon;
