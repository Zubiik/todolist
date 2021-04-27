
import styled from '@emotion/styled'

export const BodyCustom = styled.div`
border: solid 1px black;
height:500px;
min-width:30%;
background-color:${({theme}) => theme.color.grey};
display:flex;
flex-direction:column;
color:purple;
margin:5px;
padding:5px;
`;
 export const TaskCustom = styled.div`
margin:10px;
display:flex;
max-width:250px;
min-height:150px;
background-color:${({theme}) => theme.color.lightBlue};
border-radius:5px;
border: solid 1px orange;
flex-direction:column;
justify-content:space-around;
 `;

 export const TitleCustom = styled.div`
background-color:${({theme}) => theme.color.orange};
color:${({theme}) => theme.color.grey};

 `;