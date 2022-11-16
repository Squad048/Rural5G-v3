import React from 'react'

const Carrosel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div div className="carousel-item active" >
                    <img src="https://cdn.discordapp.com/attachments/1028712344110514176/1039552416103792680/alunosEstudando.jpg" className="d-block w-100" alt="1" />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.discordapp.com/attachments/1028712344110514176/1039552415847956491/alunos-estudanado2.jpg" className="d-block w-100" alt="2" />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.discordapp.com/attachments/1028712344110514176/1039552416384827392/alunos-trabalhando.jpg" className="d-block w-100" alt="3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrosel

