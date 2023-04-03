import React, {useContext, useEffect, useRef, useState} from "react";

import styles from "./OrderItem.module.css";
import AuthContext from "../../store/auth-context";

const OrderItem = (props) => {

    const [enteredAmountProduct, setEnteredAmountProduct] = useState(props.amount);
    const authCtx = useContext(AuthContext);


    useEffect(() => {
        const changeAmountOrder = setTimeout(() => {
            authCtx.onChangeOrder({type: 'CHANGE_AMOUNT', productId: props.productId, value: enteredAmountProduct})
        }, 800)

        return () => {
            clearTimeout(changeAmountOrder);
        }
    }, [enteredAmountProduct]);

    const amountChangeChandler = (event) => {
        const changeType = event.target.dataset.set;

        if (changeType === "up") {
            setEnteredAmountProduct(prevState => {
                return prevState + 1;
            });
        }
        else if (changeType === "down" && enteredAmountProduct > 1) {
            setEnteredAmountProduct(prevState => {
                return prevState - 1;
            });
        }
    }

    const amountManualChangeChandler = (event) => {
        const inputAmountProduct = event.target.value;

        setEnteredAmountProduct(prevState => inputAmountProduct);

    }

    return (
        <div
            className={styles['product-item']}
        >
            {props.title}
            <div className={styles['product-amount']}>
                <button className={styles['amount-button']} onClick={amountChangeChandler} data-set="down" type="button">-</button>
                <input className={styles['amount-input']}
                    onChange={amountManualChangeChandler}
                    type="number"
                    value={enteredAmountProduct}
                    data-product-id={props.productId}
                />
                <button className={styles['amount-button']} onClick={amountChangeChandler} data-set="up" type="button">+</button>
                <span> x {props.price.toFixed(2)}$</span>
            </div>
        </div>
    );
}

export default OrderItem;