import{useState} from 'react' // importante não se esquecer de realizar a importação do hooks.

function Forms() {
// colocar esse "e" abaixo para que se apareca a mensagem no console log, pois formulario deveria ser processado via ajax.
    function cadastrarUsuario(e){
        e.preventDefault()        
        console.log(`O usuário ${name} foi cadastrado com a senha ${passorwd}`)

        // lembrar sempre de colocar na função como que deseja queo resultado dos hooks aparecam.
        //sejam para o servidor ou para a tela.
    }

    // muito importante criar as const para que sejam coletados os dados referentes ao HTML
    const [name, setName] = useState()
    const [passorwd, setPassoword] = useState()

    return(
        <div>
            <h1>Meu cadastro </h1>
            <form onSubmit={cadastrarUsuario}>
                <div> 
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text"
                    placeholder="Digite o seu nome"
                    id="name"
                    onChange={(e)=> setName(e.target.value)} 
                    /*value={name} é para quando quiser iniciar o campo já com algum dado. deve ser dessa maneira 'jardel' no useState da const respectiva */
                    />
                </div>

                <div> 
                    <label htmlFor="password">Senha: </label>
                    <input type="password"
                    placeholder="Digite a sua senha"
                    id="password"
                    name="password"
                    onChange={(e) => setPassoword(e.target.value)}
                    />
                </div>

                <div> 

                <input type="submit" value="Cadastrar" />

                </div>

            </form>


        </div>

    )

}

export default Forms