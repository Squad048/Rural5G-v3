import React from 'react'
import "./assets/style.css"

const Sobre = () => {
    return (
        <main className='mb-5'>
            <section className='row'>
                <div className='col-4'>
                    <img id='bg' src='https://cdn.discordapp.com/attachments/1028712344110514176/1039869294676299786/rural_fundo.png' />
                </div>
                <div className='col-8 d-flex align-items-center'>
                    <div className='container'>
                        <div className='mb-5'>
                            <h1 className='text-center'>Sobre nós</h1>
                            <p className='text-center'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Quas commodi magni, quo eum labore consequuntur facere laudantium ad ipsam excepturi necessitatibus exercitationem!
                                Omnis aliquid consectetur cum atque magni nemo accusantium!

                            </p>
                        </div>
                        <div id='sobre'  className='text-center'>
                            <div>
                                <h3>Missão</h3>
                                <p>
                                    Promover equiparidade educacional por meio da troca de experiências
                                    e disseminação de informação.
                                </p>
                            </div>
                            <div>
                                <h3>Visão</h3>
                                <p>
                                    ProLorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div>
                                <h3>Valores</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p></p>
                </div>

            </section>
        </main>
    )
}

export default Sobre