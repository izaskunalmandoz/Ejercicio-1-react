import './input.css';

function Input(props) {

    const numeroHandler = (event) => {
        props.addNumero(event.target.value);
    }
    return (
        <div className='input'>
            <div className='input_tit'>
                <label>Numero de entrada:</label>
            </div>
            <input type='number' onChange={numeroHandler} className='input_numero'></input>
        </div>
    )
}

export default Input;