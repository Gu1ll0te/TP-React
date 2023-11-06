import React, {useState} from 'react';

import DangerBar from '../DangerBar/DangerBar'
import { Form } from 'react-bootstrap';

const DangerInput= ()=> {

    //VARIABLE QUE GUARDA VALOR ELEGIDO POR EL USUARIO
    const [value,setValue] = useState(0);

    //ACTUALIZA EL ESTADO DE VALUE
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));

    }

    return(
        <div className="m-3 w-50">
            <h2>Ejemplo 1</h2>
            {/* Componente padre*/}
            <Form.Range value={value} onChange={handleChange}/>

            {/* Componente hijo*/}  
            <DangerBar value={value}/>
        </div>
    )
}

export default DangerInput;