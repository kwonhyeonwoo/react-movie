import styled from "styled-components";
interface IHeader {
  scroll: boolean;
}

export const Nav = styled.nav<IHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  background-color: ${(props) => props.scroll ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,1)'};
  padding: 20px 60px;
  color: white; 
  z-index:99999;
  //scroll true 
  transition: background-color 0.3s ease-in-out;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.svg`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:relative;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

export const Search = styled.form`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 25px;
  }
`;

export const Circle = styled.span`
    width:5px;
    height:5px;
    position:absolute;
    bottom:-8px;
    left:0;
    right:0;
    margin:0 auto;
    border-radius: 5px;;
    background-color:red;

`
export const Input = styled.input<{ open: boolean }>`
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 0.4s ease-in-out;
  color: white;
  font-size: 16px;
  text-align:center;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;