import React from 'react'
import { BookType } from '../../@types/Books'

import { FiHeadphones } from 'react-icons/fi'

import {
  Container,
  BookImage,
  BookTitle,
  BookAuthor
} from './styles'

interface Props {
  book: BookType
}

const Book: React.FC<Props> = ({ book }) => {
  return (
    <Container>
      {book.volumeInfo.imageLinks ? 
        <BookImage src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> :
        <FiHeadphones color="var(--primary-color)" size={60} style={{ marginLeft: 25, marginRight: 15 }} />
      }
      <div className="volumeinfo-container">
        <BookTitle>{book.volumeInfo.title}</BookTitle>
        <BookAuthor>{book.volumeInfo.authors[0]}</BookAuthor>
      </div>
    </Container>
  )
}

export default Book
