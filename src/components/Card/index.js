import { useState } from "react";
import './Card.css'

const Card = () => {

    const [valor, setValor] = useState(0)
   
    function Adicionar () {
        setValor(valor + 1)
    }
    function Remover () {
        setValor(valor - 1)
    }
    function Zerar () {
        setValor(0)
    }

    return(
        <div className="card">
            <h2>
                Primeiro Card
            </h2>
            <div className="card-body">
                <h5 className="card-title">Contador</h5>
                <p id="numero" className="card-text valor">{valor}</p>

                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={Remover}
                >Remover</button>

                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={Zerar}
                >Zerar</button>

                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={Adicionar}
                >Adicionar</button>

            </div>
        </div>
    )
}

export default Card;