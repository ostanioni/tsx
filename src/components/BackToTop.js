import styled from 'styled-components';
;
const IconStyled = styled.svg.attrs(props => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    alt: props.alt,
})) `
  &>path {
    fill: ${props => props.theme.textColor};
  }
`;
