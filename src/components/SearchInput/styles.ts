import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3vh 0;
  /* background: #333; */
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 8px 8px 30px rgba(0,0,0,0.2);
  width: 90vw;
  border-radius: 10px;

  > input {
    height: 50px;
    padding-left: 20px;
    width: 100%;
    font-size: 18px;
  }

  > button {
    border-left: 1px solid #f1f1f1;
    padding-left: 10px;
  }
`