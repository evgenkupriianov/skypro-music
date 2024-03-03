import styled from 'styled-components'

  export const CenterBlockFilter = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-bottom: 51px;
gap: 10px;`

 export const FilterTitel = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;`

 export const WrapperPopUp = styled.div`
margin-top: 10px;
border-radius: 12px;
width: 248px;
height: 305px;
position: absolute;
padding: 34px;
background-color: #313131;`

  export const FilterPopUp = styled.div`
position: absolute;
width: 180px;
height: 237px;
font-size: 20px;
line-height: 24px;
overflow-y: auto;
background-color: #313131;
color: #fff;
font-variant-numeric: lining-nums proportional-nums;
font-style: normal;
font-family: StratosSkyeng;
font-family: "StratosSkyeng", sans-serif;
`
  export const FilterPopUpList = styled.ul`
display: flex;
flex-direction: column;
gap: 28px;`

  export const FilterPopUpItem = styled.li`
color: #b672ff;
cursor: pointer;
text-decoration: underline;`

 export const SmallPopUp = styled.div`
 margin-top: 10px;
  border-radius: 12px;
  width: 221px;
  height: 196px;
  padding: 34px;
 `