import styled, { injectGlobal, keyframes } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Muli,system-ui',sans-serif;
  }
`;

function getBackground (color) {
  switch (color) {
    case 'primary':
      return 'rgba(30, 144, 255, 1)';
    case 'green':
      return 'rgba(43, 213, 115, 1)';
    case 'danger':
      return 'rgba(255, 107, 129, 1)';
    case 'grey':
      return 'rgba(241, 242, 246, 1)';
    case 'white':
      return 'rgba(255, 255, 255, 1)';
    case 'dark':
      return 'rgba(47, 53, 66, 1)';
    default:
      return 'rgba(112, 161, 255, 1)';
  }
}

function getHoverBackground (color) {
  switch (color) {
    case 'primary':
      return 'rgba(30, 144, 255, .9)';
    case 'green':
      return 'rgba(43, 213, 115, .9)';
    case 'danger':
      return 'rgba(255, 107, 129, .9)';
    case 'grey':
      return 'rgba(241, 242, 246, .9)';
    case 'white':
      return 'rgba(255, 255, 255, .9)';
    default:
      return 'rgba(112, 161, 255, .9)';
  }
}

function getColorFocus (color) {
  switch (color) {
    case 'primary':
      return 'rgba(30, 144, 255, 1)';
    case 'green':
      return 'rgba(43, 213, 115, 1)';
    case 'danger':
      return 'rgba(255, 107, 129, 1)';
    case 'grey':
      return 'rgba(241, 242, 246, 1)';
    case 'white':
      return 'rgba(255, 255, 255, 1)';
    default:
      return 'rgba(112, 161, 255, 1)';
  }
}

export const Button = styled.button`
  padding: 0.6em 1em;
  font-size: 0.9em;
  margin: .2em 1em;
  background: ${props => getBackground(props.background)};
  border: 0;
  font-weight: 300;
  border-radius: 5px;
  color: white;
  transition: all ease 0.4s;
  border: 1px solid transparent;
  cursor: pointer;
  :focus,
  :active {
    outline: none;
    color: ${props => getColorFocus(props.background)};
    background: white;
    border: 1px solid;
    border-color: ${props => getColorFocus(props.background)};
    transform: translateY(-1px);
    box-shadow: 2px 3px 20px 0px rgba(164, 176, 190, 0.5);
  }
  :hover {
    transform: translateY(-1px);
    color: white;
    border: 1px solid transparent;
    box-shadow: 2px 3px 15px 0px rgba(164, 176, 190, 0.5);
    background: ${props => getHoverBackground(props.background)};
  }
`;

export const Input = styled.input`
  border: 0;
  padding: 0.8em 1.4em;
  outline: 0;
  font-size: 0.8em;
  color: #747d8c;
  border-radius: 5px;
  font-weight: 100;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 1) no-repeat;
  background-size: 0% 1px;
  background-position: 50% 100%;
  transition: all 0.3s cubic-bezier(0.22, 0.6, 0.81, 0.4);
  background-image: linear-gradient(to bottom, #333, #333);
  :focus,
  :active {
    background-size: 100% 1px;
    outline: none;
    border-bottom-color: #747d8c;
    background-image: linear-gradient(to bottom, #747d8c, #747d8c);
    border: 1px solid #ced6e0;
    box-shadow: 3px 2px 10px 0px rgba(164, 176, 190, 0.5);
  }
  :hover {
    transform: translateY(-2px);
    border: 1px solid #a4b0be;
    box-shadow: 3px 3px 15px 0px rgba(164, 176, 190, 0.5);
  }
`;

export const Heading = styled.h2`
  margin: 1em;
  color: ${props => getBackground(props.color)};
  display: inline-block;
`;

export const PokeCard = styled.div`
  width: 30%;
  background: rgba(241, 242, 246, 1);
  padding: .8em;
  margin: .75em 0;
  display:flex;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all ease .2s;
  :hover{
    transform: translateY(-2px);
    border:1px solid rgba(164, 176, 190,1.0);
    box-shadow: 2px 3px 15px 0px rgba(164, 176, 190, 0.5);
  }
`;

export const PageContainer = styled.div`
  text-align:center;
  margin: 1em auto;
  overflow:hidden;
`;

const backgroundAnim = keyframes`
  from{
    background: rgba(255, 255, 255, .8);
  }to{
    background: rgba(255, 255, 255, 1);
  }
`;

export const LoadingImage = styled.div`
  width: 4em;
  animation: ${backgroundAnim} ease .4s infinite;
  border-radius: 100vw;
  display:inline-block;
  height: 4em;
  float: left;
`;

export const Content = styled.div`
  width: 80%;
  display: inline-block;
  float: left;
  padding: .5em 1em;
`;

export const LoadingBar = styled.div`
  width: ${props => props.small ? '20%' : '30%'};
  margin: ${props => props.small ? '0em .4em' : '.6em .4em'};
  display: ${props => props.small ? 'block' : 'inline-block'};
  animation: ${backgroundAnim} ease .2s infinite;
  height: ${props => props.small ? '.6em' : '.7em'};
`;

const spinnerAnim = keyframes`
  0%{
    transform: rotateZ(0deg);
  }
  25%{
    transform: rotateZ(90deg);
  }
  50%{
    transform: rotateZ(180deg);
  }
  75%{
    transform: rotateZ(270deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
`;

export const Spinner = styled.div`
  border: 2px double #ffa502;
  padding: .5em;
  animation:${spinnerAnim} ease .5s infinite;
  background: transparent;
  width: 2em;
  height: 2em;
  border-radius: 100vw;
  border-top-width: 0;
  border-bottom-width: 0;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CardHeading = styled.h4`
  margin: 0em .4em;
  text-transform: capitalize;
  font-weight: 400;
  color: ${props => getBackground(props.color)};
`;

export const Capsules = styled.div`
  display: inline-block;
  padding: .5em .8em;
  margin: .4em;
  border-radius: 5px;
  background: ${props => getBackground(props.background)};
  color: white;
  font-weight: 100;
  font-size: .7em;
  text-transform: capitalize;
`;

export const PageNumber = styled.div`
  display: inline-block;
  padding: .4em .6em;
  margin: .2em;
  overflow: hidden;
  background: white;
  color: ${props => getBackground(props.color)};
  border: 1px solid ${props => getBackground(props.color)};
  border-radius: 5px;
  cursor:pointer;
  transition: all ease .2s;
  :hover{
    background: ${props => getBackground(props.color)};
    color: white;
    transform: translateY(-1px);
    box-shadow: 2px 3px 15px 0px rgba(164, 176, 190, 0.5);
  }
`;

export const ActivePageNumber = PageNumber.extend`
  background: ${props => getBackground(props.color)};
  box-shadow: transform: translateY(-1px);
  box-shadow: 2px 3px 10px 0px rgba(164, 176, 190, 0.5);
  color: white;
  cursor: default;
  transform: translateY(-2px);
`;
