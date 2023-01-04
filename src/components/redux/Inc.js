import React from 'react'
import {connect} from 'react-redux' ;
import {increase,decrease} from './Action';

const Inc = ({count,increase,decrease}) => {
    return (
        <div>
            Count From Inc Component : {count} <br /><br />
            <button onClick={() => increase()}>Increment</button>  &nbsp;&nbsp;
            <button onClick={() => decrease()}>Decrement</button>
        </div>
    )
}

export default Inc;
