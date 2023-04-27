import React,{useState, useEffect} from 'react';
import logo from '../../assets/logomarca.png';
import './cardapio.css';
import MenuBottom from '../../components/menuBottom';
function Cardapio(){
    return(
        <div className='bodyCardapio'>
            <MenuBottom/>
           <p>cardapio</p> 

        </div>
    );
} 
export default Cardapio;