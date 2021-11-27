import React, { useState } from "react";
import Counter from "./Counter";
import Button from "./Button";

function MainCounter() {
    const [count, setCount] = useState([]);

    function handlerIncrease(id) {
        count.forEach((i) => {
            if (i.id === id) {
                i.counterValue++;
            }
        });
        setCount([...count]);
    }

    function handlerDecrease(id) {
        count.forEach((i) => {
            if (i.id === id) {
                i.counterValue <= 0 ? i.counterValue=0 : i.counterValue--;
            }
        });
        setCount([...count]);
    }

    function handlerReset(id) {
        count.forEach((i) => i.counterValue = 0);
        setCount([...count]);
    }

    function addCounter() {
        const newCounterItem = {
            id: Math.random().toString(36).substr(2, 9),
            counterValue: 0
        }
        count.forEach((i) => {
            if (i.counterValue !== 0 && i.counterValue % 2 === 0) {
                    i.counterValue++;
            }
        })
        setCount([...count, newCounterItem]);
    }

    function reset() {
        setCount([]);
    }

    function removeCounter(id) {
        const filteredCounter = count.filter((item) => { return item.id !== id });
        filteredCounter.forEach((i) => {
            if (i.counterValue % 2 !== 0) {
                i.counterValue--;
            }
        })
        setCount(filteredCounter);
    }

    return (
        <div className="counter">
            <div className="counter__information">
                <span>Количество счетчиков на экране: {count.length}</span>
                <span>Сумма знaчений счетчиков: {count.reduce((acc, curVal) => {
                    return acc + curVal.counterValue
                }, 0)}</span>
            </div>
            <div>
                <Button onClick={ addCounter } content={ 'Add Count' }/>
                <Button onClick={ reset } content={ 'Reset' }/>
            </div>
            <div className="counter__list">
                {count.map((item) => {
                    return (
                        <Counter
                            item={item}
                            counterValue={item.counterValue}
                            id={item.id}
                            key={item.id}
                            removeCounter={removeCounter}
                            handlerIncrease={handlerIncrease}
                            handlerDecrease={handlerDecrease}
                            handlerReset = {handlerReset}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MainCounter;