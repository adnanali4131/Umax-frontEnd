import styled from 'styled-components'

// filters page styling
export const FilterWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
  }
`
// export const TimeRangeConatiner = styled.div`
//   @media only screen and (max-width: 768px) {
//     &:nth-child(1) {
//       background-color: red;
//       width: 100%;
//     }
//   }
// `

export const FilterContainer = styled.div`
  padding: 20px 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 5px;
  }
`

export const Containerfluid = styled.div`
  padding: 50px 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 5px;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Wrapper = styled.div`
  padding-top: 50px;
`
