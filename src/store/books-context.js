import React, {useState} from "react";

const BOOKS = [
  {
    id: "b1",
    title: "Szczęki mojej babci",
    type: "horror",
    author: "Agnieszka Zawadzka",
    publisher: "Helios",
    year: 2018,
    dateAdd: new Date(2021, 4, 16),
    quantity: 30,
    price: 35.99
  },
  {
    id: "b2",
    title: "Alicja",
    type: "przygodowe",
    author: "Jacek Piekara",
    publisher: "Fabryka snów",
    year: 2018,
    dateAdd: new Date(2022, 4, 12),
    quantity: 10,
    price: 23.99
  },
  {
    id: "b3",
    title: "Ala ma kota",
    type: "Bajka",
    author: "Małgorzata Budzyńska",
    publisher: "Psy i koty",
    year: 1993,
    dateAdd: new Date(2022, 4, 1),
    quantity: 25,
    price: 19.95
  },
  {
    id: "b4",
    title: "Kuchenne rewolucje",
    type: "kulinaria",
    author: "Magda Gessler",
    publisher: "Kuchnia i ja",
    year: 2017,
    dateAdd: new Date(2022, 4, 13),
    quantity: 15,
    price: 85.50
  }
];

const BooksContext = React.createContext({
  booksList: [],
  onAddNewBook: () => {
  }
});

export const BooksContextProvider = (props) => {

  const [booksList, setBooksList] = useState(BOOKS);

  const addNewBookChandler = () => {
    return true;
  }

  return (
    <BooksContext.Provider
      value={{
        booksList: booksList,
        onAddNewBook: addNewBookChandler
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
}

export default BooksContext;