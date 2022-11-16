import React from 'react'
import Aluno from './Aluno';
import Patrocinador from './Patrocinador';
import Professor from './Professor';

const AreaCadastro = () => {

    let [opcao, setOpcao] = React.useState('Aluno');

    const handleClick = (e) => {
        setOpcao(e.target.innerHTML)
    }
    return (
        <main>
            <section className='text-center mt-5'>
                <h1>Deseja se cadastrar como:</h1>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success" onClick={handleClick}>Aluno</button>
                    <button type="button" className="btn btn-success" onClick={handleClick}>Patrocinador</button>
                    <button type="button" className="btn btn-success" onClick={handleClick}>Professor</button>
                </div>
            </section>
            
            {opcao === "Aluno" && <Aluno />}
            {opcao === "Patrocinador" && <Patrocinador />}
            {opcao === "Professor" && <Professor />}
        </main>
    )
}

export default AreaCadastro