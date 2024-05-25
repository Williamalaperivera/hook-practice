import React, { useState } from 'react'

 export const MySecondComponent = () => {

    const[ name, setName ] = useState ("william alape");
    const [isNameChanged, setIsNameChanged] = useState(false);

const changeName = (e) => {
   if(isNameChanged){
    setName("William Alape");
   } else{
    setName("Edgar Alape");
   }
   setIsNameChanged(!isNameChanged);
}
  return (
    <div>
        <h3>componente: SecondComponent</h3>
        <p>{ name }</p>
        <div>
            <button className='button-large' onClick={changeName}>Cambiar nombre</button>

        </div>
    </div>
  )
}

export default MySecondComponent