import './style.css'
function App (){
    return (
        <div className='container'>
            <div>
            <p className='Logo'>Game Library</p>
            </div>
            <div className="Input">
                <p className="Text">Nome</p>
                <input type="Text" placeholder="Nome"></input>
            </div>
            <div className="Input">
                <p className="Text">Email</p>
                <input type="Text" placeholder="exemplo@dominio.com"></input>
            </div>
            <button className='Button'>Logar</button>
        </div>
    )
}

export default App