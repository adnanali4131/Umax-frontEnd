import styled from 'styled-components'

export const Containerfluid = styled.div`
  padding: 100px;

  @media only screen and (max-width: 992px) {
    padding: 10px;
    justify-content: center;
  }
`
export const Container = styled.div`
  padding-top: 50px;
`
export const Wrapper = styled.div`
  padding-top: 50px;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`
export const Discription = styled.div`
  display: flex;
  justify-content: space-between;
`
export const FromWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
