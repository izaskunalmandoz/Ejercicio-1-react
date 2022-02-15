import './boton.css';

function Boton(props) {

    const botonHandler = (event) => {
        props.addMulti(event.target.value);
    }

    return (
        <div className='boton'>
            <div className='boton_tit'>
                <label>X</label>
            </div>
            <div>
                <button onClick={botonHandler}  className={`botones ${props.multi==37?'select':''}`} value='37'>37</button>
                <button onClick={botonHandler}  className={`botones ${props.multi==43?'select':''}`} value='43'>43</button>
            </div>
        </div>
    )
}

export default Boton;