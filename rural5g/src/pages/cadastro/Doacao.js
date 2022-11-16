import React from 'react'

const Doacao = () => {
    return (
        <section class="container my-5 rounded-4" style={{ backgroundColor: "rgb(119, 231, 119)" }}>
            <h1 className='text-center'>Cadastrar Doacao</h1>
            <form class="w-50 p-5" action="cadastroDoacao" method="post">
                <div class="form-floating mb-3">
                    <input type="text" name="nome" class="form-control rounded-3"
                        id="floatingInputL" /> <label for="floatingInput">Digite
                            o que vai doar</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="id_escola"
                        class="form-control rounded-3" id="floatingInputL" /> <label
                            for="floatingInput">Digite o Id da escola</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="id_doador"
                        class="form-control rounded-3" id="floatingInputL" /> <label
                            for="floatingInput">Digite o Id do doador</label>
                </div>
                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-success"
                    type="submit">DOAR</button>

            </form>

        </section >
    )
}

export default Doacao