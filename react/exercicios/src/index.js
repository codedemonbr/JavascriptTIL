import React from 'react';
import ReactDOM from 'react-dom';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';
ReactDOM.render(
    <div>
        <Pai nome="Thiago" sobrenome="Santos">
            <Filho nome="Arthur"></Filho>
            <Filho nome="Ana Carolina" sobrenome="Ribeiro dos Santos"></Filho>
            <Filho nome="Pedro"></Filho>
        </Pai>
    </div>,
    document.getElementById('root')
);
