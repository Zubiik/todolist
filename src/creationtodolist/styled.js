import styled from "@emotion/styled";

export const TaskCustom = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 5px;
  width: 250px;
  min-height: 150px;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  box-shadow: 11px 9px 30px -5px rgba(0, 0, 0, 0.54);
`;

export const BodyCustom = styled.div`
  display: flex;
  border-radius: 5px;
`;

export const CustomTitle = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  margin: 2px;
  padding: 15px;
  width: 80%;
  border-radius: 5px;
`;

export const CustomText = styled(CustomTitle)``;

export const CreateTaskZone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 5px;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lightBlue};
  color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  padding: 5px;
  box-shadow: 10px 10px 21px -1px rgba(0, 0, 0, 0.57);
`;

export const InputCreateTitle = styled.input`
  display: flex;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  margin: 5px;
`;

export const InputCreateText = styled(InputCreateTitle)`
  height: 40px;
`;

export const ChangeStatutButton = styled(AddButton)``;

export const RemoveButtonCustom = styled(AddButton)`
  background-color: ${({ theme }) => theme.color.orange};
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  box-shadow: 10px 10px 21px -1px rgba(0, 0, 0, 0.57);
`;

export const ContainerChangeStatutButton = styled.div`
  display: flex;
  justify-content: space-around;
`;
