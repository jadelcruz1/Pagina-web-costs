import Button from "./Button"

function Evento() {

    function meuEvento(){
        console.log(`Primeiro evento`)
    }
    function meuEvento2(){
        console.log(`Segundo evento`)
    }



    return(
        <div>
            <p>Clique par disparar um evento </p>
            <Button event={meuEvento}text="primeiro Evento"/>
      
            <div>
                <Button event={meuEvento2} text="Segundo "/>
                
            </div>
        </div>
    )

}

export default Evento