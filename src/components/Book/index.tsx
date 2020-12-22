import React from 'react'
import { BookType } from '../../@types/Books'

import { Container } from './styles'

interface Props {
  book: BookType
}

const Book: React.FC<Props> = ({ book }) => {
  return (
    <Container>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h1>{book.volumeInfo.title}</h1>
    </Container>
  )
}

export default Book
