import React from 'react'
import { FiArrowDown, FiSearch } from 'react-icons/fi'
import axios from 'axios'

import Book from '../../components/Book'

import { motion } from 'framer-motion'

import Loader from 'react-loader-spinner'

import {
  Container,
  InputWrapper,
  SbookLogo,
  SearchResultsContainer
} from './styles'

import { BookType } from '../../@types/Books'

interface SearchResults {
  kind: string,
  items: BookType[]
}

interface Response {
  data: SearchResults
}

const Home: React.FC = () => {
  const [searchText, setSearchText] = React.useState('')
  const [searchResultsAreShowing, setSearchResultsAreShowing] = React.useState(false)

  const [books, setBooks] = React.useState<BookType[]>([])

  const [loading, setLoading] = React.useState(false)

  async function searchBooks() {
    setLoading(true)
    setSearchResultsAreShowing(false)

    const response: Response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)

    setBooks(response.data.items)

    setSearchText('')
    setSearchResultsAreShowing(true)
    setLoading(false)
  }

  return (
    <Container>
      {loading && <Loader type="Watch" color="rgba(247,176,2,1)" height={50} width={50} />}
      
      <SearchResultsContainer>
        {books.map(book => <Book book={book} />)}
      </SearchResultsContainer>

      <SbookLogo style={{
        marginBottom: searchText !== '' ? 25 : 50,
      }}>
        <p>sbook</p>
      </SbookLogo>

      {!searchResultsAreShowing && (
        <section style={{
          opacity: searchText !== '' ? 0 : 1,
          position: searchText !== '' ? 'absolute' : 'static',
          bottom: searchText !== '' ? 0 : 60,
        }}>
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
      )}

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
        <input
          placeholder="Search for books..."
          value={searchText}
          onChange={changeEvent => setSearchText(changeEvent.target.value)}
        />
        <motion.button
          onClick={searchBooks}
        >
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

export default Home
