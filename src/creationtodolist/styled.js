import styled from '@emotion/styled'

export const TaskCustom = styled.div`
margin:10px;
display:flex;
background-color:${({theme}) => theme.color.grey};
border-radius:5px;
border: solid 1px orange;
width:250px;
min-height:150px;
flex-direction:column;
justify-content:space-around;
position:relative;

`;

export const BodyCustom = styled.div `
border: solid 1px pink;
display:flex;
border-radius:5px;
`;

export const InputCustomTitle = styled.div`
border: solid 1px pink;
background-color:${({theme}) => theme.color.white};
margin:10px;
width:80%;
border-radius:5px;
`;

export const InputCustomText = styled(InputCustomTitle)`
border: solid 1px red;
hyphens: auto;
`;



export const CreateTaskZone = styled.div`
display:flex;
flex-direction: column;
`;

export const InputCustom = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:20px;
padding:10px;
background-color:${({theme}) => theme.color.grey};
border-radius:5px;

`;

export const AddButton = styled.div`
display:flex;
justify-content:center;
background-color:${({theme}) => theme.color.lightBlue};
color:${({theme}) => theme.color.white};
border-radius:5px;
padding:5px;
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.22);
`;

export const InputCreateTitle = styled.input`
display:flex;
width:200px;
height:30px;
border-radius:5px;
margin:5px;
`;

export const InputCreateText = styled(InputCreateTitle)`
height:40px;
`;

export const ChangeStatutButton = styled(AddButton)`
border: solid 1px blue;
`;

export const RemoveButton = styled(AddButton)`
background-color:${({theme}) => theme.color.orange};
position:absolute;
top:5px; right:5px;
`;

export const ContainerChangeStatutButton = styled.div`
border: solid 1px yellow;
display:flex;
justify-content:space-around;
`;