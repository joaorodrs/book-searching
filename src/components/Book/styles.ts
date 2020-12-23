import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 8px 8px 15px rgba(0,0,0,0.1);
  margin: 20px 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  height: 110px;
  overflow: hidden;

  .volumeinfo-container {
    margin-left: 20px;
  }
`

export const BookImage = styled.img.attrs({
  resizeMode: 'contain'
})`
  width: 100px;
`

export const BookTitle = styled.h1`
  font-size: 23px;
  max-width: 33vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2;
  font-weight: 700;
  color: var(--primary-color);
`

export const BookAuthor = styled.h3`
  font-size: 15px;
`
