import PropTypes from 'prop-types'

function Item({marca, lancamento}) {
    return(

        <> 
        <ul> 

            <li>
                {marca} - {lancamento}
            </li>


        </ul>
        
        
        
        </>
    )
}

// obs. em cima no import a Propriedade é com letra maiuscula(PropTypes) aqui em baixo para acessar é com letra minuscula(propTypes)
Item.propTypes = { 
    marca: PropTypes.string,
    lancamento: PropTypes.number.isRequired, // pode solicitar que seja requerido(isRequired)

}

// posso colocar que irá haver um default com as regras abaixo. assim não apresenta erro no console.
Item.defaultProps = {
    marca: 'faltou a marca',
    lancamento: 0,


}
export default Item