import {useState, useEffect} from 'react';
import logo from '../../assets/logomarca.png';
import './confirmarMesa.css';
import { Link } from "react-router-dom";

function confirmarMesa(){
    const estabelecimento = "Mão de pilão";
    const mesa = "Mesa 01";
    return(
        <div className="bodyConfirmarMesa">
            <img src={logo} alt='logomarca'></img>
            <form>
                <p className='titleInputName'><b>Como quer ser chamado?</b></p>
                <input className='inputName' type='name' placeholder="Digite aqui"/>
                <p className='titleMesa'><b>Por favor, confirme sua mesa</b></p>
                <p>{estabelecimento}</p>
                <p>{mesa}</p>
                <Link to='/cardapio'><input className='buttonConfirmarMesa' type='submit' value="Confirmar"></input></Link>
            </form>
            <button>Essa não é minha mesa</button>
        </div>
    )

} export default confirmarMesa;
