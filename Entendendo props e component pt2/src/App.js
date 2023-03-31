import React from 'react';
const Bemvindo = (props) =>{
    return(
        <div>
            <h2>Bem-vindo(a) {props.nome}.</h2>
            <h2>Tenho {props.idade} anos de idade.</h2>
        </div>
    );
}

function App(){
    return(
<div>        <h1>Olá mundo!</h1>
        <Bemvindo nome="Igor" idade="22"/>
        <Bemvindo nome="Maria" idade="21"/>
        </div>
    );
}

export default App;