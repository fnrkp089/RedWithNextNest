import styled from '@emotion/styled'

export const MiddleContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 40px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width:400px;
  width: 100%;
  height: 100%;
`

export const CustomHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 42px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`

export const CustomContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px
  height: auto;
  margin-top: 40px;
  border: 1px solid black;
`

export const CustomContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:auto;
  border: 1px solid red;
  cursor: pointer;
`
