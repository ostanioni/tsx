import React, { useEffect } from 'react';
// const StyledDiv = styled.div`
//  position: fixed;
//  top: 0;
//  height: 100px;
//  background-color: ${props => props.theme.colors.secondary};
// `
const Com = () => {
    useEffect(() => {
        alert("Com");
    });
    return (React.createElement("div", null, "FC"));
};
function TrainingComponent() {
    useEffect(() => {
        alert("TC");
    });
    return (React.createElement("div", null, "JSX"));
}
console.log('COM = ', Com);
console.log('JSX = ', TrainingComponent);
export default TrainingComponent;
// class ClCom extends React.Component {
//   render() {
//          return (
//            <div>I'm CLASS component</div>
//          )      
//        }
// }
// export {StyledDiv, ClCom, FC_}
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
