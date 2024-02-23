export interface ModelBook {
    book: {
         
      title: string;
      pages: number;
      genre: string;
      cover: string;
      synopsis: string;
      year: number;
      ISBN: string;
      author: {
        name: string;
        otherBooks: string[];
      };


     

    };
  }