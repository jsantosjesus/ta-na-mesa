import React, { useState, useEffect } from 'react';
import logo from '../../assets/logomarca.png';
import './cardapio.css';
import MenuBottom from '../../components/menuBottom';
import pizzaDeQueijo from '../../assets/pizzaDeQueijo.png';
import hamburguer from '../../assets/hamburguer.png';
import cervejaBudweiser from '../../assets/cervejaBudweiser.png';
import { FaChevronLeft } from "react-icons/fa";

function Cardapio() {
    const estabelecimento = "Pizzaria Mão de Pilão";

    // const [produtoAdicionado, setProdutoAdicionado] = useState({});

    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho == null) {
        carrinho = []
    }


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
        preco: 6.99,
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
    }, [categoriaFiltro]);

    //  useState para funções de abrir e fechar poupup do produto

    const [elementoAtivo, setElementoAtivo] = useState(null);

    const handleClick = (object) => {
        setElementoAtivo(object);
    }

    

    // popupup do produto

    const Popup = ({ object }) => {

        const [quantidade, setQuantidade] = useState(1);

        const [subtotal, setSubtotal] = useState(0);

        const alterarQuantidade = (operador) => {
            setQuantidade(quantidade + operador);
        }

        const calcularSubtotal = () => {
            setSubtotal(object.preco * quantidade);
        }

        const [observacoes, setObservacoes] = useState('')

        useEffect(() => {
            calcularSubtotal();
        }, [quantidade]);



        const Subtotal = React.memo(({ subtotal }) => {
            return (
                <div><b>R$ {subtotal.toFixed(2).replace(".", ",")}</b></div>
            );
        });


        ;

        const formulandoProduto = () => {

            let p ={
                id: object.id,
                imagem: object.imagem,
                nome: object.nome,
                preco: object.preco,
                categoria: object.categoria,
                observacao: observacoes,
                quantidade: quantidade
            }

            console.log('formulou');
            console.log(p);

           return p;
            

        };


        const adicionandoProdutoCarrinho = () => {
            let produtoAdicionado = formulandoProduto();
            let encontrado = false;
            for (let i = 0; i < carrinho.length; i++) {
                if (carrinho[i].nome == produtoAdicionado.nome && carrinho[i].observacao == produtoAdicionado.observacao) {
                    carrinho[i].quantidade = carrinho[i].quantidade + produtoAdicionado.quantidade;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                carrinho.push(produtoAdicionado);
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            console.log('mandou')
            setObservacoes("");
            setQuantidade(1);
            console.log(textObservacao);
            textObservacao.innerHTML = ("");

        };


        if (elementoAtivo !== object) {
            return null;
        }


        const handleClose = () => {
            setElementoAtivo(null);
            setQuantidade(1);
            setSubtotal(0);
        };

       


        return (

            <div className='PoupupProduto'>

                <p className='fecharProdutoIndividual' onClick={handleClose}><FaChevronLeft /></p>
                <div className='poupupProdutoContent'>
                    <img className='imagemProdutoIndividual' src={object.imagem} alt='imagem do produto' />
                    <h3 className='titleProdutoIndividual'>{object.nome}</h3>
                    <p className='descricaoProdutoIndividual'>{object.Descricao}</p>
                    <textarea id='textObservacao' onChange={e => setObservacoes(e.target.value)} placeholder='Observações' />
                </div>
                <div className='footerProdutoIndividual'>
                    <div className='PrecoProdutoIndividual'>
                        <Subtotal subtotal={subtotal} />
                        <div>
                            <button onClick={() => { if (quantidade > 1) { alterarQuantidade(-1) } }}>-</button>
                            <p>{quantidade}</p>
                            <button onClick={() => { alterarQuantidade(+1) }}>+</button>
                        </div>
                    </div>
                    <div className='botaoProdutoIndividual'>
                        <p><button className='queroJa'>Quero já</button></p>
                        <p><button className='adicionarCarrinho' 
                        onClick={adicionandoProdutoCarrinho}
                        >Adicionar ao Carrinho</button></p>
                    </div>
                </div>


            </div>
        );
    }

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
                            onClick={() => handleClick(object)}
                        >

                            <img className='produtoImagem' src={object.imagem} alt='imagem do produto' />
                            <div>
                                <h3>{object.nome}</h3>
                                <p className="produtoDescricao">{object.Descricao}</p>
                                <p className='produtoPreco'>R$ {object.preco.toFixed(2).replace(".", ",")}</p>
                            </div>
                        </div>
                        <Popup object={object} />
                    </div>

                )

                )
                }
            </div>
        </div>
    );
}
export default Cardapio;