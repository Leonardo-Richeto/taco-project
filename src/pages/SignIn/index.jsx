import { InputText } from "../../components/InputText";
import { Container, Form,Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUser } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi"
import { FaArrowLeftLong } from "react-icons/fa6";

export function SignIn(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const { signIn } = useAuth()
    const navigate = useNavigate()

    async function handleSignIn(){
        if(!email && !password) return toast.warn("Preencha todos os campos.")
        setLoading(true)

        try {
            await signIn({ email, password })
            navigate("/")
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    function verifyEnter(e){
        if(e.key === 'Enter') handleSignIn()
    }

    return(
        <Container>

        <ToastContainer
        position="bottom-right" 
        />

        <Background />

        <Form action="#">

            <h1>Login</h1>
            
            <Link to="/" className="back">
                <FaArrowLeftLong /> Voltar ao início
            </Link>

            <FaUser className="user" />
            <InputText
            className="input"
            icon={<FiMail />}
            placeholder="E-mail..."
            type="email"
            onChange={e => setEmail(e.target.value)}
            onKeyPress={e => verifyEnter(e)}
            autoFocus
            />

            <InputText
            className="input"
            icon={<FiLock />}
            placeholder="Senha..."
            type="password"
            onChange={e => setPassword(e.target.value)}
            onKeyPress={e => verifyEnter(e)}
            />
        
            <button
            onClick={handleSignIn}
            className={loading ? "button button-loading" : "button"}
            disabled={loading}
            >
                <p className="button-text">
                    Entrar
                </p>
            </button>

            <div className="links">
                <Link className="register" to="/register">Criar Conta</Link>
    
                <Link className="forgot" to="/forgot-password">Esqueci minha senha!</Link>
            </div>
        </Form>
 
        </Container>
    )
}