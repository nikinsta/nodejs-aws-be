interface Book {
  id: string;
  title: string;
  author?: string;
  description: string;
  language?: string;
  publishYear?: number;
  price: number;
  count: number;
}

interface BookDTO {
  title: string;
  author?: string;
  description: string;
  language?: string;
  publishYear?: number;
  price: number;
  count: number;
}

export {
  Book,
  BookDTO
};
