import React,{useState, useEffect} from 'react';
import logo from '../../assets/logomarca.png';
import './cardapio.css';
import MenuBottom from '../../components/menuBottom';
function Cardapio(){
    const estabelecimento = "Mão de Pilão";

    return(
        <div className='bodyCardapio'>
            <MenuBottom/>
           <h1>{estabelecimento}</h1> 

        </div>
    );
} 
export default Cardapio;