import React from 'react'
import "./assets/style.css"

const Header = () => {
    return (
        <header className="">
            <nav className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link text-white fs-5" aria-current="page">Home</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Colaboradores
                        </a>
                        <ul className="dropdown-menu" style={{backgroundColor: "#35b935"}}>
                            <li><a className="dropdown-item text-white fs-5" href="/voluntario">Voluntarios</a></li>
                            <li><a className="dropdown-item text-white fs-5" href="/doacao">Doações</a></li>
                            <li><a className="dropdown-item text-white fs-5" href="/escola">Cadastrar minha escola</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="/sobre" className="nav-link text-white fs-5">O Projeto</a></li>
                    <li className="nav-item"><a href="/contato" className="nav-link text-white fs-5">Contato</a></li>
                    <li className="nav-item"><a href="/signin" className="nav-link active bg-success text-white fs-5">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header