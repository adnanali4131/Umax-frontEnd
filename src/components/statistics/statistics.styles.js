import styled from 'styled-components'

export const FilterWrapper = styled.div`
  padding: 0px 100px;
  max-width: 80%;
  @media only screen and (max-width: 992px) {
    max-width: 100%;
    padding: 0px;
  }
`
export const Containerfluid = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 85%;
  border: 1px solid #dfe0eb;

  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 992px) {
    display: block;
  }
`
export const GraphContainer = styled.div`
  width: 70%;
  padding: 20px 30px;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`
export const Graph = styled.div`
  padding: 60px 20px 20px 20px;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`
export const Container = styled.div`
  border: 1px solid #dfe0eb;
  padding: 25px;
  text-align: center;
`
export const TableWrapper = styled.div`
  padding: 30px 100px;
  h2 {
    padding: 30px 10px;
  }
  @media only screen and (max-width: 992px) {
    max-width: 100%;
    padding: 0px;
  }
`
