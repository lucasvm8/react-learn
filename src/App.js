import './App.css';
import { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form'
import Conditional from './components/Conditional';
import Lista from './components/Lista';
import SeuNome from './components/SeuNome';

function App() {
  const [name, setName] = useState()

  //const itens = ['Livro', 'Caderno', 'Cartolina', 'Papel']

  function soma (a, b) {
    return a + b;
  }

  const meuArray = ['Vue', 'React', 'Angular', 'Any...']

  const url = 'https://via.placeholder.com/150'
  const nome = 'Jose'

  return (  
    <div className="App">
      <SeuNome setName={setName}/>
      {name}
      <Lista meuArray={meuArray} />
      <h1>Olá Mundo!</h1>
      <p>Sr(a): { name }</p>
      <p>Soma: { soma(2, 3) }</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld />
      <SayMyName name={nome}/>
      <SayMyName name="Maria"/>
      <Pessoa nome="Lucas" idade="26" profissao="dev" foto={url}/>
      <List />
      <Evento />
      <Form />
      <Conditional />
    </div>
  );
}

export default App;
