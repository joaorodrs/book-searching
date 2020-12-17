import React from 'react'
import { FiSearch } from 'react-icons/fi'

import {
  Container,
  InputWrapper
} from './styles'

const SearchInput: React.FC = () => {
  return (
    <Container>
      <InputWrapper>
        <input placeholder="Search for books..." />
        <button>
          <FiSearch color="#F7B002" size={30} style={{ marginRight: 10 }} />
        </button>
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
