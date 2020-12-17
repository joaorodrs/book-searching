import React from 'react'
import { FiSearch } from 'react-icons/fi'

import { motion } from 'framer-motion'

import {
  Container,
  InputWrapper
} from './styles'

const SearchInput: React.FC = () => {
  return (
    <Container>
      <InputWrapper
        initial={{ height: 50, width: 50 }}
        animate={{ width: "90vw" }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delayChildren: 8,
          staggerChildren: 3
        }}
      >
        <motion.input
          placeholder="Search for books..."
        />
        <motion.button>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
          >
            <FiSearch color="#F7B002" size={30} style={{ marginRight: 10 }} />
          </motion.div>
        </motion.button>
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
