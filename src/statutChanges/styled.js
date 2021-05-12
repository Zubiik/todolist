import styled from "@emotion/styled";

export const BodyCustom = styled.div`
  border: 1px solid red;
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 5px;
  border-radius: 5px;
  position: relative;
`;
export const TaskCustom = styled.div`
  border: 1px solid red;
  margin: 10px;
  padding: 10px;
  padding-bottom: 0px;
  margin-left: -1px;
  display: flex;
  width: 250px;
  min-height: 150px;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 5px;
  border: solid 1px white bold;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 11px 9px 30px -5px rgba(0, 0, 0, 0.54);
  position: relative;
`;

export const TitleCustom = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

export const ChangeStatutButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  padding: 5px;
  box-shadow: 10px 10px 21px -1px rgba(0, 0, 0, 0.57);
`;

export const InputCustomTitle = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  margin: 2px;
  padding: 15px;
  width: 80%;
  border-radius: 5px;
`;
export const InputCustomText = styled(InputCustomTitle)``;
