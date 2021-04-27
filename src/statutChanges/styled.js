import styled from '@emotion/styled'

export const BodyCustom = styled.div`
min-width:30%;
background-color:${({theme}) => theme.color.grey};
display:flex;
flex-direction:column;
margin:5px;
padding:5px;
border-radius:5px;
`;
 export const TaskCustom = styled.div`
margin:10px;
display:flex;
width:250px;
min-height:150px;
background-color:${({theme}) => theme.color.white};
border-radius:5px;
border: solid 1px orange;
flex-direction:column;
justify-content:space-around;
box-shadow: 10px 5px 5px grey;

 `;

 export const TitleCustom = styled.div`
color:${({theme}) => theme.color.black};

 `;