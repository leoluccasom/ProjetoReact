import { useState } from 'react'
import {FaUser, FaLock} from 'react-icons/fa'
import './Login.css'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const envioFormulario = (event) => {
    event.preventDefault()
    alert ('Usuário Cadastrado!')
  }

  return (
      <div className="container">
            <form onSubmit={envioFormulario}>
                <h1>Acesse o sistema</h1>
                <div className='input-field'>
                <input className='input-text' type="email" placeholder='E-mail' 
                onChange={(e)=>setUsername(e.target.value)}
                required/>
                <FaUser className='icon'/>
                </div>
                <div className='input-field'>
                <input className='input-text' type="password" placeholder='Senha'
                onChange={(e)=> setPassword(e.target.value)} 
                required/>
                <FaLock className='icon' />
                </div>
                <div className='recall-forget'>
                  <label>
                    <input type="checkbox" />
                    Lembre-se de mim
                  </label>
                  <a href="#">Esqueceu sua senha?</a>
                </div>
                <button>Entrar</button>
                <div className='singup-link'>
                  <p>Não tem uma conta? <a href="#">Registrar-se</a></p>
                </div>
            </form>
      </div>
  )
}

export default Login
