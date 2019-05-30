import React from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div `
 position: fixed;
 top: 0;
 height: 100px;
 background-color: red;
`;
const FC_ = () => {
    return (React.createElement("div", null, "I'm FC"));
};
class ClCom extends React.Component {
    render() {
        return (React.createElement("div", null, "I'm CLASS component"));
    }
}
export { StyledDiv, ClCom, FC_ };
// const BackToTopStyled = styled.span.attrs(props=>({
//   onCick: props.onClick,
//   id: props.id,
// }))`
//   position: fixed;
//   cursor: pointer;
//   bottom: 2.5rem;
//   right: 2.5rem;
//   &.BackToTop-is-hide {
//     right: -2.5rem;
//   }
//   transition: right 0.5s;
// `;
// const App: React.FC = () => {
//   return (
//     <BackToTopStyled onClick={this.toTop} id="BackToTop" className="BackToTop-is-hide">
//       <Icon width="2.5rem" alt="UP" />
//     </BackToTopStyled>
//   )
// }
// class BackToTop extends React.Component {
//    toTop = ()=>{
//      window.scrollTo(0,0);
//    }
//    scrollHandler = ()=>{
//      const toTop  = document.getElementById('BackToTop')
//      window.pageYOffset > 50 ? toTop.classList.remove('BackToTop-is-hide') : toTop.classList.add('BackToTop-is-hide')
//    }
//    componentDidMount(){
//      window.addEventListener('scroll', this.scrollHandler)
//    }
//    render() {
//      return (
//        <BackToTopStyled onClick={this.toTop} id="BackToTop" className="BackToTop-is-hide">
//          <Icon width="2.5rem" alt="UP" />
//        </BackToTopStyled>
//      )      
//    }
//  }
//  export default BackToTop;
