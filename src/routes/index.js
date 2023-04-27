
import  {Switch}  from 'react-router-dom';

import Cardapio from '../pages/cardapio';
import ConfirmarMesa from '../pages/confirmarMesa';
import Route from './Route';


export default function Rotas(){
    return(
        <Switch>
          <Route exact path="/" component={ConfirmarMesa} /> 

          <Route exact path="/cardapio" component={Cardapio} />

        </Switch>
    )
}