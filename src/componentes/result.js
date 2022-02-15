import './result.css';

function Result(props) {
    const resultado =props.numero*props.multi;
    return (
        <div className='result'>
            <div className='result_tit'>
                <label>Resultado:</label>
            </div>
            <div className='result_numero'>
                {resultado}
            </div>
        </div>
    )
}

export default Result;