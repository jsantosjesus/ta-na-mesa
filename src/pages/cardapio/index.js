import React, { useState, useEffect } from 'react';
import logo from '../../assets/logomarca.png';
import './cardapio.css';
import MenuBottom from '../../components/menuBottom';
function Cardapio() {
    const estabelecimento = "Pizzaria Mão de Pilão";

    const [produtos, setProdutos] = useState([{
        id: 1,
        imagem: "src",
        nome: "Pizza de frango",
        Descricao: "Tomate, cebola, Queijo e frango",
        preco: 29.99
    },
{
        id: 1,
        imagem: "src",
        nome: "Pizza de frango",
        Descricao: "Tomate, cebola, Queijo e frango",
        preco: 29.99
    }])

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        filterData();
    }, [searchTerm]);

    return (
        <div className='bodyCardapio'>
            <MenuBottom />
            <div className='headCardapio'>
                <h1>{estabelecimento}</h1>
            </div>
            <div className='persquisaCardapio'>
                <input type="text" placeholder="Pesquisar" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
            </div>
        </div>
    );
}
export default Cardapio;