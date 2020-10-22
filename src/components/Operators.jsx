import React from 'react'
import Operator from './Operator'

import { generate as id } from 'shortid'
import opArray from '../opArray.js'



const Operators = ({filtro,elements}) => {
  const getOperators = (filtro) => {
    if (filtro){
      return opArray.filter(operator=>operator.task===filtro)
    }else{
      return opArray
    }
  }
  return (   
      <>
      {getOperators(filtro).map(operator=>(
        <Operator
          key={id()} 
          operator={operator}
          elements={elements}>
        </Operator>)
      )}
    </>
  )
}

export default Operators