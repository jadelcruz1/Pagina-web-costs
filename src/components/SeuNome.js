// componente criado para o Treinamento em State Lift juntamente com o componente Saudacao.js e APP.js

function SeuNome({setNome}){

    return(

            <div>

                <p> Digite seu nome:  </p>
                <input type="text" 
                placeholder=" Digite seu nome" 
                onChange={(e) => setNome(e.target.value)}
                />

            </div>

    )
}

export default SeuNome