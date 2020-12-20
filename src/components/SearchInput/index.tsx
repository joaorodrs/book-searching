import React from 'react'
import { FiArrowDown, FiSearch } from 'react-icons/fi'
import axios from 'axios'

import { motion } from 'framer-motion'

import {
  Container,
  InputWrapper,
  SbookLogo,
  SearchResultsContainer
} from './styles'

interface Book {
  searchInfo: {
    textSnippet: string
  },
  volumeInfo: {
    authors: string[],
    canonicalVolumeLink: string,
    categories: string[],
    description: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    },
    infoLink: string,
    pageCount: number,
    previewLink: string,
    publishedDate: string,
    publisher: string,
    title: string,
  },
}

interface SearchResults {
  kind: string,
  items: Book[]
}

interface Response {
  data: SearchResults
}

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = React.useState('')
  const [searchResultsAreShowing, setSearchResultsAreShowing] = React.useState(false)

  const [books, setBooks] = React.useState<Book[]>([])

  async function searchBooks() {
    const response: Response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)

    setBooks(response.data.items)
    console.log(response.data.items)

    setSearchText('')
    setSearchResultsAreShowing(true)
  }

  return (
    <Container>
      <SearchResultsContainer>
        {books.map(book => {
          return (
            <div>
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.description}</p>
            </div>
          )
        })}
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
          onTap={searchBooks}
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

export default SearchInput
