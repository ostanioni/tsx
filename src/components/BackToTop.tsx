import React, { useEffect } from 'react';
import styled from 'styled-components';

// btt - back to top component
interface innerSvgProps {
  readonly alt: string;
};
const IconStyled = styled.svg.attrs<innerSvgProps>(props=>({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox:"0 0 512 512",
  width: props.width,
  alt: props.alt,
}))`
  &>path {
    fill: ${props=>props.theme.textColor};
  }
`

interface bttProps {

}

