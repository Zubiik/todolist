import styled from '@emotion/styled'

export const TaskCustom = styled.div`
margin:10px;
display:flex;
justify-content:center;
min-width:200px;
background-color:${({theme}) => theme.color.lightBlue};
border-radius:5px;

`;

export const BodyCustom = styled.div `
border: solid 1px pink;
display:flex;
align-items:flex-start;
`;

export const InputCustomTitle = styled.div`
border: solid 1px black;
`;

export const InputCustomText = styled.div`
border: solid 1px black;
`;

export const Checkbox = styled.input`
border: solid 1px black;
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
box-shadow: 10px 5px 5px grey;

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