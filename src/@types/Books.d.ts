export interface BookType {
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