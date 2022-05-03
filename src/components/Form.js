import { useState } from 'react'

function Form () {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name}, password ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>
                Meu Cadastro
            </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Nome: " 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    placeholder="Senha: " 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
