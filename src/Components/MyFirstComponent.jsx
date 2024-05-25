import React from 'react'
import { useState } from 'react'

 export const MyFirstComponent = () => {
const [counter, setCounter ] = useState(0);


  return (
    <div>
        <h1>El numero del contador es: {counter}</h1>
        <button type='submit' className='button-large' onClick={() => setCounter(counter + 1)}>Sumar contador</button>


    </div>
  )
}

export default MyFirstComponent