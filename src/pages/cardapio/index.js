import React, { useState, useEffect } from 'react';
import logo from '../../assets/logomarca.png';
import './cardapio.css';
import MenuBottom from '../../components/menuBottom';
function Cardapio() {
    const estabelecimento = "Pizzaria Mão de Pilão";

    return (
        <div className='bodyCardapio'>
            <MenuBottom />
            <div className='headCardapio'>
                <h1>{estabelecimento}</h1>
            </div>
        </div>
    );
}
export default Cardapio;