import './style.css'
function App (){
    return (
        <><div className='container'>
            <div>
                <p className='Logo'>Game Library</p>
            </div>

            <div className="Input">
                <p className="Text">Email</p>
                <input type="Text" className='Text' placeholder="exemplo@email.com"></input>
            </div>
            <div className="Input">
                <p className="Text">Senha</p>
                <input type="password" className='Text' placeholder="Senha"></input>
            </div>
            <button className='Button'><a href="/Home">logar</a></button>
            <a href='/Cadastro'><p className='Text'>Não tem conta? Cadastre-se</p></a>
        </div></>
        
    )
}

export default App