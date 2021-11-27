import React from "react";
import Button from "./Button";

function Counter({ item, removeCounter, counterValue, handlerIncrease, handlerReset, handlerDecrease }) {

    return (
        <div className="counter__item" id={ item.id }>
            <div className="counter__text"><span>{ counterValue }</span></div>
            <div>
                <Button onClick={()=> handlerIncrease(item.id) } content={ '+' }/>
                <Button onClick={()=> handlerReset(item.id) } content={ 'Reset' }/>
                <Button onClick={()=> handlerDecrease(item.id) } content={ '-' }/>
            </div>
            <Button onClick={() => removeCounter(item.id) } content={ 'Remove counter' }/>
        </div>
    )
}

export default Counter;