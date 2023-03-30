import React from 'react';

const Equipe = (props) => {
    return(
    <div>
        <Sobre nome={props.nome}
        cargo={props.cargo}
        idade={props.idade}/>
        <Social fb={props.facebook}/>
    </div>
    );
}

const Sobre = (props) => {
    return(
    <div>
        <h2>Olá sou o(a) {props.nome}.</h2>
        <h3>Cargo: {props.cargo}.</h3>
        <h3>Idade: {props.idade}.</h3>
    </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>LinkedIn </a>
            <a>Youtube </a>
        </div>
    );
}

{/*
const Bemvindo = (props) =>{
    return(
        <div>
            <h2>Bem-vindo(a) {props.nome}.</h2>
            <h2>Tenho {props.idade} anos de idade.</h2>
        </div>
    );
}
*/}

function App(){
    return(
    <div>
        <h1>Conheça nossa equipe:</h1>
        <Equipe nome="Igor" cargo="Programador" idade="21" facebook="https://google.com"/>
        <Equipe nome="Rayssa" cargo="Designer" idade="18" facebook="https://google.com"/>
        <Equipe nome="Maria" cargo="Financeiro" idade="28" facebook="https://google.com"/>
        </div>
    );
}

export default App;