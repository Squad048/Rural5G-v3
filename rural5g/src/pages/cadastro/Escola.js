import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Escola = () => {
    const initialValue = {
        nome: '',
        estado: '',
        cidade: "",
        bairro: ''
    }

    const [values, setValues] = React.useState(initialValue);
    const navigate = useNavigate();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post('http://localhost:8080/api/escolas', values)
            .then((response) => {
                navigate("/home");
            });
    }
    return (
        <section class="container my-5 rounded-4" style={{ backgroundColor: "rgb(119, 231, 119)" }}>
            <h1 className='text-center'>Cadastrar Escola</h1>
            <form class="w-75 p-5 mb-5" onSubmit={onSubmit}>
                <div class="form-floating mb-3">
                    <input type="text" name="nome" class="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label for="floatingInput">Digite o nome</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="estado" class="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label for="floatingInput">Digite o estado</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="cidade" class="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label for="floatingInput">Digite a cidade</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="bairro" class="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label for="floatingInput">Digite o bairro</label>
                </div>
                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-success"
                    type="submit">Cadastrar</button>

            </form>
        </section>
    )
}

export default Escola