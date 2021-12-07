import {useState} from 'react' 

// esse componente foi criado para treinar a funcionaliade de if e else no react js.
// a sintaxe dele é diferente do comum, para if usa o && e o else deixa em branco.
// exemplo linha 29 a 37.

function Condicionais(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
            <div>
            <h2> cadastre seu email</h2>
            <form>
            
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}> Enviar</button>
                {userEmail && (

                    <div>
                        <p> 
                            O email do usuário é: {userEmail}
                        </p>
                        <button onClick={limparEmail}> limpar email</button>

                    </div>
                )}

                   
            </form>

            </div>
        
    )
}

export default Condicionais