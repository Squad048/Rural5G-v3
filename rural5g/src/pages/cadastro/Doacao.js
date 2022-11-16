import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Doacao = () => {
    const initialValue = {
        nome: '',
        id_escola: null,
        id_doador: null
    }

    const [values, setValues] = React.useState(initialValue);
    const navigate = useNavigate();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post('http://localhost:8080/api/doacoes', values)
            .then((response) => {
                navigate("/");
            });
    }
    return (
        <section className="container my-5 rounded-4" style={{ backgroundColor: "rgb(119, 231, 119)" }}>
            <h1 className='text-center'>Cadastrar Doacao</h1>
            <form className="w-50 p-5" onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" name="nome" className="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/> <label htmlFor="floatingInput">Digite
                            o que vai doar</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="id_escola"
                        className="form-control rounded-3" id="floatingInputL" onChange={onChange}/> <label
                            htmlFor="floatingInput">Digite o Id da escola</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="id_doador"
                        className="form-control rounded-3" id="floatingInputL" onChange={onChange}/> <label
                            htmlFor="floatingInput">Digite o Id do doador</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-success"
                    type="submit">DOAR</button>

            </form>

        </section >
    )
}

export default Doacao