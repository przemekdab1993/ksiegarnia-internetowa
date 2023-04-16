import React, {useCallback, useEffect, useState} from "react";


const BooksContext = React.createContext({
    booksList: [],
    loadingData: false,
    error: null,
    onAddNewBook: () => {
    }
});

export const BooksContextProvider = (props) => {

    const [booksList, setBooksList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

     const  loadingProducts = useCallback(
     async () => {
         setIsLoading(true);
         setError(null);

         try {
             const response = await fetch('http://localhost:4008/api/products', {headers: {"Content-Type": "application/json"}});
             if (!response.ok) {
                 throw new Error('Something wont rong :(');
             }
             const data = await response.json();

             console.log(data['hydra:member']);
             setBooksList(prevState => {
                 return data['hydra:member']
             });
             setIsLoading(false);

         } catch (err) {
             setError(err.message);
             setIsLoading(false);
         }
     }, []);

    const postNewProduct = async (newItem) => {

        try {
            const response = await fetch('http://localhost:4008/api/products', {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(newItem)
            });

            const data = await response.json();
            setIsLoading(true);
            console.log(data);

        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };



    useEffect( () => {
        loadingProducts();
        return () => {
            setBooksList([]);
        }
    }, []);

    const addNewBookChandler = (newItem) => {
        postNewProduct(newItem);
    }

    return (
        <BooksContext.Provider
            value={{
                booksList: booksList,
                loadingData: isLoading,
                error: error,
                onAddNewBook: addNewBookChandler
            }}
        >
            {props.children}
        </BooksContext.Provider>
    );
}

export default BooksContext;