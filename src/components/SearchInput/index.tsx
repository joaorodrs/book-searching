import React from 'react'
import { FiArrowDown, FiSearch } from 'react-icons/fi'

import { motion } from 'framer-motion'

import {
  Container,
  InputWrapper,
  SbookLogo
} from './styles'

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = React.useState('')

  return (
    <Container>
      <SbookLogo>
        <p>sbook</p>
      </SbookLogo>

      <section>
        <p>Search for books by title or authors!</p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
          }}
        >
          <FiArrowDown color="#F7B002" size={40} />
        </motion.div>
      </section>

      <InputWrapper
        initial={{ height: 50, width: 50 }}
        animate={{ width: "90vw" }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 80,
          delayChildren: 0.1,
          staggerChildren: 0.2
        }}
      >
        <motion.input
          placeholder="Search for books..."
          value={searchText}
          onChange={changeEvent => setSearchText(changeEvent.target.value)}
        />
        <motion.button>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <FiSearch color={searchText !== '' ? "#F7B002" : "lightgray"} size={30} style={{ marginRight: 10 }} />
          </motion.div>
        </motion.button>
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
