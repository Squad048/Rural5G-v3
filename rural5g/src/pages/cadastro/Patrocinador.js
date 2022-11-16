import React from 'react'

const Patrocinador = () => {
    return (
        <section class="container my-5 rounded-4" style={{ backgroundColor: "rgb(119, 231, 119)" }}>
            <h1 className='text-center'>Cadastrar Patrocinador</h1>
            <form class="w-75 p-5 mb-5" action="create" method="post">
                <div class="form-floating mb-3">
                    <input type="text" name="nome" class="form-control rounded-3"
                        id="floatingInputL" /> 
                    <label for="floatingInput">Digite o nome</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="cpf" class="form-control rounded-3"
                        id="floatingInputL" /> <label for="floatingInput">Digite
                            o CPF</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="email" class="form-control rounded-3"
                        id="floatingInputL" /> 
                    <label for="floatingInput">Digite o email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="celular" class="form-control rounded-3"
                        id="floatingInputL" /> 
                    <label for="floatingInput">Digite o celular</label>
                </div>
                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-success"
                    type="submit">Cadastrar</button>

            </form>
        </section>
    )
}

export default Patrocinador