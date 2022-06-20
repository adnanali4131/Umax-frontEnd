import styled from 'styled-components'

// filters page styling
export const FilterWrapper = styled.div`
  padding: 50px 20px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding: 10px 10px;
  }
`
// pdf button
export const Containerfluid = styled.div`
  display: flex;
  padding: 0px 70px;
  /* justify-content: center; */

  @media only screen and (max-width: 992px) {
    display: block;
    width: 100%;
    padding: 10px 10px;
  }
`
export const Container = styled.div`
  margin-top: auto;
  margin-bottom: auto;

  @media only screen and (max-width: 992px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 10px 40px 10px;
  }
`

// card
export const CardWrapper = styled.div`
  padding: 30px 70px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding: 10px 10px;
  }
`
export const CardTitle = styled.div`
  display: flex;

  h1 {
    padding: 0px 10px;
    font-size: 22px;
    margin-top: auto;
    margin-bottom: auto;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dfe0eb;
  padding-left: 65px;

  @media only screen and (max-width: 992px) {
    display: block;
    text-align: center;
    padding-left: 0px;
  }
`

export const AddTime = styled.div`
  display: flex;
  flex-direction: row;
  button {
    margin-left: 10px;
  }
  @media only screen and (max-width: 992px) {
    display: block;
    padding: 5px;
    text-align: center;
  }
`
export const ApproveTime = styled.div`
  display: flex;
  button {
    margin-left: auto;

    &:hover {
      background-color: #a0d911;
      color: #fff;
      border: none;
    }
  }
`
export const Actions = styled.div`
  display: inline-flex;
  gap: 5px;
  @media only screen and (max-width: 992px) {
    display: block;
    padding: 5px;
    text-align: center;
  }
`
export const FromWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
