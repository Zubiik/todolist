import styled from '@emotion/styled'

export const BodyCustom = styled.div`
border: solid 1px black;
height:500px;
background-color:${({theme}) => theme.color.grey};
display:flex;
flex-direction:column;
color:purple;
margin:5px;
padding:5px;
`;
 export const TaskCustom = styled.div`
border: solid 1px black;
margin:10px;
background-color:${({theme}) => theme.color.lightBlue};
padding:5px;
height:100px;
max-width:150px;
 `;

 export const TitleCustom = styled.div`
background-color:${({theme}) => theme.color.orange};
color:${({theme}) => theme.color.grey};

 `;