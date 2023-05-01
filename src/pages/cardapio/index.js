import React, { useState, useEffect } from 'react';
import logo from '../../assets/logomarca.png';
import './cardapio.css';
import MenuBottom from '../../components/menuBottom';
import pizzaDeQueijo from '../../assets/pizzaDeQueijo.png';
import hamburguer from '../../assets/hamburguer.png';
import cervejaBudweiser from '../../assets/cervejaBudweiser.png';

function Cardapio() {
    const estabelecimento = "Pizzaria Mão de Pilão";

    const [produtos, setProdutos] = useState([{
        id: 1,
        imagem: pizzaDeQueijo,
        nome: "Pizza de queijo",
        Descricao: "Tomate, cebola, Queijo e frango",
        preco: 59.99,
        categoria: 'pizzas'
    },
    {
        id: 2,
        imagem: pizzaDeQueijo,
        nome: "Pizza de Lombo Tamanho Família",
        Descricao: "Tomate, cebola, Queijo e lombo",
        preco: 49.99,
        categoria: 'pizzas'
    },
    {
        id: 3,
        imagem: cervejaBudweiser,
        nome: "Cerveja Budwiser 200ml",
        Descricao: "A melhor loren loren loren loren loren loren loren loren loren loren loren",
        preco: 9.99,
        categoria: 'bebidas'
    },
    {
        id: 4,
        imagem: hamburguer,
        nome: "Hamburguer Americano",
        Descricao: "Carne Bovina, Tomate, Cebola, Alface, Queijo",
        preco: 4.99,
        categoria: 'lanches'
    },
    {
        id: 4,
        imagem: hamburguer,
        nome: "Hamburguer Americano",
        Descricao: "Carne Bovina, Tomate, Cebola, Alface, Queijo",
        preco: 4.99,
        categoria: 'lanches'
    }]);

    const categorias = [{ id: 0, nome: "bebidas" }, { id: 1, nome: "lanches" }, { id: 2, nome: "pizzas" }, { id: 2, nome: "doces" }, { id: 2, nome: "salgados" }, { id: 2, nome: "testando" }];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [categoriaFiltro, setCategoriaFiltro] = useState("todos");
    const [selecionado, setSelecionado] = useState('todos');

    const escolherCategoria = (categoria) => {
        setCategoriaFiltro(categoria);
        setSelecionado(categoria);
    }

    const filterData = () => {
        let results = produtos;

        if (searchTerm === "" && categoriaFiltro == "") {
            results = produtos;
        }

        if (searchTerm !== "") {
            results = produtos.filter(object => object.nome.toLowerCase().includes(searchTerm.toLowerCase()))
        };

        if (searchTerm === "" && categoriaFiltro !== "todos") {
            results = produtos.filter(object => object.categoria == categoriaFiltro)
        };


        setFilteredData(results);
    }

    useEffect(() => {
        filterData();
    }, [searchTerm]);

    useEffect(() => {
        filterData();
    }, [categoriaFiltro])

    return (
        <div className='bodyCardapio'>
            <MenuBottom />
            <div className='headCardapio'>
                <div className='titleCardapio'>
                    <h1>{estabelecimento}</h1>
                </div>

                <div className='pesquisaCardapio'>
                    <input type="text" placeholder="Pesquise aqui" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
                </div>
                <div className='categorias'>
                    <div onClick={() => escolherCategoria('todos')}
                        className={
                            'todos' === selecionado ? 'categoriaAtivo' : 'categoriaInativo'
                        }>
                        Todos
                    </div>
                    {categorias.map((categorias, index) => (

                        <div onClick={() => escolherCategoria(categorias.nome)}
                            key={categorias.nome}
                            className={
                                categorias.nome === selecionado ? 'categoriaAtivo' : 'categoriaInativo'
                            }>
                            {categorias.nome}
                        </div>

                    ))}
                </div>
            </div>
            <div className='produtosCardapio'>
                {filteredData.map((object, id) => (
                    <div>
                        <div className="produtos"
                        // onClick={() => handleClick(object)}
                        >

                            <img className='produtoImagem' src={object.imagem} alt='imagem do produto' />
                            <div>
                                <h3>{object.nome}</h3>
                                <p className="produtoDescricao">{object.Descricao}</p>
                                <p className='produtoPreco'>R$ {object.preco.toFixed(2).replace(".", ",")}</p>
                            </div>
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