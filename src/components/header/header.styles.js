import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;

  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0px;
  color: #000000;
`

export const Button = styled.button`
  font-size: 15px;
  margin: 10px;
  padding: 5px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #f0f5ff;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    display: inline-block;
  }
`

export const Timer = styled.button`
  font-size: 15px;
  margin: 12px;
  padding: 5px 15px;
  display: flex;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  span {
    padding: 2px 3px;
  }
  &:hover {
    background-color: #f0f5ff;
    cursor: pointer;
  }
`

export const List = styled.ul`
  padding-top: 15px;
  list-style: none;
  display: flex;
  gap: 10px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`

export const ListItem = styled.li`
  font-size: 15px;
  padding: 0px 10px;

  /* ${(props) => props.isActive} {
    background-color: red;
  } */

  /* background-color: ${(props) => (props.isActive ? 'red' : 'green')}; */
  
  a {
    display: flex;
    gap: 10px;
    color: #000000;
    padding: 5px 0px;
  }
  &:hover {
    background-color: #f0f5ff; 
    cursor: pointer;
  }
`
export const Containerfluid = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
  }
`
export const Container = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    padding: 10px;
  }
`
// timer
export const TimerImg = styled.div`
  text-align: center;
`
export const FormWrapper = styled.div`
  width: 320px;
`
