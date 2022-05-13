import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  .header {
    min-width: 300px;
    max-width: 320px;
    color: white;
  }

  .content {
    display: flex;
    flex-direction: column;
    min-width: 350px;
    max-width: 4200px;
    min: 270px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    align-items: center;

    .input {
      width: 100%;
      height: 32px;
      border: 2px solid #ccc;
      border-radius: 5px;

      :hover {
        border: 2px solid #073a8c;
      }
    }
  }
`;

export const Button = styled.button`
  width: 80px;
  padding: 5px;
  cursor: pointer;
  height: 35px;
  color: white;
  background: #0d3678;
  border: 1px solid #0341b6;
  border-radius: 10px;
  box-shadow: 0 3px #666;

  :hover {
    background-color: #0341b6;
  }

  :active {
    background-color: #0341b6;
    box-shadow: 0 1.5px #666;
    transform: translateY(4px);
  }
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  max-width: 42px
  min: 270px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  align-items: center;
`;
