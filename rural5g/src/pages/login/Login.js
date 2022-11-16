import React from 'react'

const Login = () => {
    return (
        <main className='container mt-5'>

            <div class="form-signin w-50 m-auto">
                <form>
                    <div className='text-center'>
                        <img class="mb-4" src="https://cdn.discordapp.com/attachments/1028712344110514176/1040230834285838376/android-chrome-192x192.png" alt="" width="72" height="57" />
                        <h1 class="h3 mb-3 fw-normal">Entre</h1>
                    </div>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Senha</label>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> lembrar-me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-success" type="submit">Entrar</button>
                    <div className='d-flex'>
                        <p>Ainda não é cadastrado?</p>
                        <a href='#'>Clique aqui</a>
                    </div>
                    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </div>
        </main>
    )
}

export default Login