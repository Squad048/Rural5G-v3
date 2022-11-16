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

        axios.post('http://localhost:8080/api/escolas/signup', values)
            .then((response) => {
                navigate("/");
            });
    }
    return (
        <section className="container my-5 rounded-4" style={{ backgroundColor: "rgb(119, 231, 119)" }}>
            <h1 className='text-center'>Cadastrar Escola</h1>
            <form className="w-75 p-5 mb-5" onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" name="nome" className="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label htmlFor="floatingInput">Digite o nome</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="estado" className="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label htmlFor="floatingInput">Digite o estado</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="cidade" className="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label htmlFor="floatingInput">Digite a cidade</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="bairro" className="form-control rounded-3"
                        id="floatingInputL" onChange={onChange}/>
                    <label htmlFor="floatingInput">Digite o bairro</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-success"
                    type="submit">Cadastrar</button>

            </form>
        </section>
    )
}

export default Escola