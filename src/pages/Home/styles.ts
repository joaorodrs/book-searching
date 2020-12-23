import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 97vh;
  background: var(--background-color);

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    transition: 0.5s;

    > p {
      font-size: 20px;
      color: gray;
      margin-bottom: 20px;
    }
  }

  .loader-container {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const SbookLogo = styled.div`
  margin-bottom: 50px;
  transition: 0.5s;

  > p {
    font-weight: 700;
    background-image: linear-gradient(90deg, rgba(247,176,2,1), 10%, rgba(247,176,2,1), rgba(247,176,2,0.2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 50px;
    user-select: none;
  }
`

export const InputWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 8px 8px 30px rgba(0,0,0,0.15);
  width: 90vw;
  border-radius: 10px;

  > input {
    height: 50px;
    padding-left: 20px;
    width: 100%;
    font-size: 18px;

    ::placeholder {
      color: #c8c8c8;
    }
  }

  > button {
    border-left: 1px solid #f1f1f1;
    padding-left: 10px;
    cursor: pointer;
    
    :hover {
      opacity: 0.6
    }
  }
`

export const SearchResultsContainer = styled.div`
  overflow-y: scroll;
  width: 100vw;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`