import React, {useContext, useEffect, useState} from "react";

import styles from "./NewProduct.module.css";

import Card from "../UserInterface/Card";
import BooksContext from "../../store/books-context";

const NewProduct = (props) => {

    const bookCtx = useContext(BooksContext);

    const [enteredFormValues, setEnteredFormValues] = useState({
        title: '',
        type: 'horror',
        author: '',
        publisher: '',
        year: 1900,
        quantity: 0,
        price: 0.00
    });
    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(() => {
        const checkValidForm = setTimeout(() => {


            if (enteredFormValues.title.length === 0 ||
                enteredFormValues.type.length === 0 ||
                enteredFormValues.author.length === 0 ||
                enteredFormValues.publisher.length === 0 ||
                enteredFormValues.year.length === 0 ) {

                return setFormIsValid(false);
            }

            if (enteredFormValues.price <= 0 && enteredFormValues.quantity <= 0 ) {
                return setFormIsValid(false);
            }
            return setFormIsValid(true);
        }, 500);

        return () => {
            clearTimeout(checkValidForm);
        }
    }, [enteredFormValues]);

    const enteredFormValuesHandler = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setEnteredFormValues(prevState => {
            let newState = {...prevState};
            newState[inputName] = value;

            return newState;
        })

    }

    const addNewProductHandler = (event) => {

        event.preventDefault();
        if (formIsValid === true) {
            console.log("Udało się zwalidować i treść zostaje wysłana");

            const newItem = {
                title: enteredFormValues.title,
                type: enteredFormValues.type,
                author: enteredFormValues.author,
                publisher: enteredFormValues.publisher,
                year: +enteredFormValues.year,
                createdAt: new Date,
                quantity: +enteredFormValues.quantity,
                price: +(enteredFormValues.price * 100),
                active: true
            }
            bookCtx.onAddNewBook(newItem);
            // setEnteredFormValues({
            //     title: '',
            //     type: 'horror',
            //     author: '',
            //     publisher: '',
            //     year: 1900,
            //     quantity: 0,
            //     price: 0.00
            // });

        } else {
            console.log("Walidacja nie przeszła");
            console.log(enteredFormValues);
        }
    }

    const toDay = new Date();

    return (
        <Card className={styles["new-product"]}>
            <button className={styles["btn-close"]} onClick={props.onHidden}>X</button>
            <h2>Add new Product</h2>
            <form>
                <div className={styles["form-group"]}>
                    <label htmlFor="title">Title</label>
                    <input
                        //className={styles[""]}
                        onChange={enteredFormValuesHandler}
                        name="title"
                        type="text"
                        value={enteredFormValues.title}
                    />
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="inputStatus">Type</label>
                    <select
                        onChange={enteredFormValuesHandler}
                        name="selectStatus"
                        id="inputStatus"
                        className={styles["form-control"]}
                        defaultValue={enteredFormValues.type}
                    >
                        <option value="horror" >horror</option>
                        <option value="przygodowe" >przygodowe</option>
                        <option value="bajka" >bajka</option>
                        <option value="kulinaria" >kulinaria</option>
                    </select>
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="author">Author</label>
                    <input
                        //className={styles[""]}
                        onChange={enteredFormValuesHandler}
                        name="author"
                        type="text"
                        value={enteredFormValues.author}
                    />
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="publisher">Publisher</label>
                    <input
                        //className={styles[""]}
                        onChange={enteredFormValuesHandler}
                        name="publisher"
                        type="text"
                        value={enteredFormValues.publisher}
                    />
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="year">Year</label>
                    <input
                        //className={styles[""]}
                        onChange={enteredFormValuesHandler}
                        name="year"
                        type="number"
                        min="1900"
                        max={toDay.getFullYear()}
                        value={enteredFormValues.year}
                    />
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        //className={styles[""]}
                        onChange={enteredFormValuesHandler}
                        name="quantity"
                        type="number"
                        min="1"
                        max="10000"
                        step="1"
                        value={enteredFormValues.quantity}
                    />
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="price" >Price</label>
                    <input
                        //className={styles[""]}
                        onChange={enteredFormValuesHandler}
                        name="price"
                        type="number"
                        min="0.01"
                        max="1000"
                        step="0.01"
                        value={enteredFormValues.price}
                    />
                </div>

                <div className={styles["modal-bottom-nav"]}>

                    <button
                        className={`${styles["book-box-button"]} ${styles["btn-add"]}`}
                        onClick={addNewProductHandler}
                    >Add</button>
                </div>
            </form>
        </Card>
    );
}

export default NewProduct;