import styled from '@emotion/styled'

export const BodyCustom = styled.div`
width:250px;
display:flex;
flex-direction:column;
margin:5px;
padding:5px;
border-radius:5px; 
position: relative;
`;
export const TaskCustom = styled.div`
margin:10px;
margin-left:-1px;
display:flex;
width:250px;
min-height:150px;
background-color:${({theme}) => theme.color.grey};
border-radius:5px;
border: solid 1px white bold;
flex-direction:column;
justify-content:space-around;
box-shadow: 5px 2px 2px grey;
position:relative;

`;

export const TitleCustom = styled.div`
color:${({theme}) => theme.color.white};
font-size:20px;
display:flex;
justify-content:center;
`;

export const ChangeStatutButton = styled.div`
display:flex;
justify-content:center;
margin:5px;
background-color:${({theme}) => theme.color.orange};
color:${({theme}) => theme.color.white};
border-radius:5px;
padding:5px;
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.22);

`;

export const InputCustomTitle = styled.div`
background-color:${({theme}) => theme.color.white};
margin:5px;
padding:10px;
width:80%;
border-radius:5px;
`;
export const InputCustomText = styled(InputCustomTitle)`
`;

