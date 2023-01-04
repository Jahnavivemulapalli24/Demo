import React from 'react';

import {connect} from 'react-redux' ;

import { IncAction } from './redux/Action';

import { DecAction } from './redux/Action';





const Demo = ({local_varaiable,incAction,decAction}) => {

  return (

     <div>

      <center>

     

      <h1>COUNTER</h1>

      <h1>{local_varaiable}</h1> <br />

      <button onClick={() => incAction(3)} >Increment</button>

      <button onClick={decAction} >Decrement</button>

   

      </center>

     </div>

  )

  }





  const mapStateToProps = state => ({

    local_varaiable : state

  })




export default connect(mapStateToProps,{incAction:IncAction,decAction:DecAction})(Demo);