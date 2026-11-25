import './style.css'
function App (){
    return (
        <><div className='container'>
            <div>
                <p className='Logo'>Game Library</p>
            </div>.
            <div className="Input">
                <p className="Text">Nome</p>
                <input type="Text" className='Text' placeholder="Nome"></input>
            </div>
            <div className="Input">
                <p className="Text">Email</p>
                <input type="Text" className='Text' placeholder="exemplo@email.com"></input>
            </div>
            <div className="Input">
                <p className="Text">Senha</p>
                <input type="password" className='Text' placeholder="Senha"></input>
            </div>
            <button className='Button'><a href="/Home">Cadastrar-se</a></button>
            <a href='/'><p className='Text'>Tem Conta? Entre</p></a>
        </div></>
        
    )
}

export default App