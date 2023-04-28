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
        preco: 59.99,
        categoria: 'pizza'
    },
    {
        id: 2,
        imagem: "src",
        nome: "Pizza de Lombo Tamanho Família",
        Descricao: "Tomate, cebola, Queijo e lombo",
        preco: 49.99,
        categoria: 'pizza'
    },
    {
        id: 3,
        imagem: "src",
        nome: "Cerveja Budwiser 200ml",
        Descricao: "A melhor",
        preco: 9.99,
        categoria: 'bebidas'
    },
    {
        id: 4,
        imagem: "src",
        nome: "Hamburguer Americano",
        Descricao: "Carne Bovina, Tomate, Cebola, Alface, Queijo",
        preco: 4.99,
        categoria: 'hamburguer'
    }])

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const filterData = () => {
        let results = produtos;

        if (searchTerm !== "") {
            results = produtos.filter(object => object.nome.toLowerCase().includes(searchTerm.toLowerCase()))
        };

        setFilteredData(results);
    }

    useEffect(() => {
        filterData();
    }, [searchTerm]);

    return (
        <div className='bodyCardapio'>
            <MenuBottom />
            <div className='headCardapio'>
                <h1>{estabelecimento}</h1>
            </div>
            <div className='pesquisaCardapio'>
                <input type="text" placeholder="Pesquise aqui" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
            </div>
            <div className='produtosCardapio'>
               {filteredData.map((object, id) => (
                            <div >
                                <div className="produtos" 
                                // onClick={() => handleClick(object)}
                                >

                                    <p>{object.nome}</p>
                                    <p>R$ {object.preco.toFixed(2).replace(".", ",")}</p>
                                    <p>{object.categoria}</p>
                                    <p>{object.imagem}</p>
                                </div>
                                {/* <Popup object={object} /> */}
                            </div>

                        )

                        )
                        } 
            </div>
        </div>
    );
}
export default Cardapio;