import React from 'react'
import styled from 'styled-components'

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.borderColor};
  margin: 20px;
`

const boxList = ["red", "green", "blue"];

const getBoxName = (color) =>{
  switch(color){
    case "red":
      return "빨간 박스"
    case "green":
      return "초록 박스"
    case "blue":
      return "파랑 박스"
    default:
      return "검정 박스"
  }
}
function Styled() {
  return (
    <div>
      {/* <StBox borderColor="red">빨간 박스</StBox>
      <StBox borderColor="green">초록 박스</StBox>
      <StBox borderColor="blue">파랑 박스</StBox> */}
      {
        boxList.map((boxColor) => {
            return <StBox key={boxColor} borderColor={boxColor}>
                {getBoxName(boxColor)}
            </StBox>
        })
      }
    </div>
  )
}

export default Styled
