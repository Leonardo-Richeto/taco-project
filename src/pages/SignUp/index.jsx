import { Container, Form, Background } from "./styles";
import { InputText } from "../../components/InputText";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { validateName, validateEmail, checkRepeat } from "../../utils/formatting";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from "../../service/api"

import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { FaUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSignUp(){
        if(!name || !email || !password) return toast.warn('Preencha todos os campos')

        if(name.length < 5) return toast.warn("Informe seu nome completo.")
        if(email.length < 10) return toast.warn("Informe seu email completo.")
        if(password.length < 4) return toast.warn("A senha precisa ter pelo menos 4 caracteres.")

        const nameRepeat = checkRepeat(name)
        const emailRepeat = checkRepeat(email)
        const passwordRepeat = checkRepeat(password)

        if(nameRepeat && emailRepeat && passwordRepeat) return toast.error("Padrão de caracteres repetidos.")

        const validName = validateName(name)
        const validEmail = validateEmail(email)

        if(!validName) return toast.warn("Use apenas letras nome.")
        if(!validEmail) return toast.error("Este não é um email válido.")

        setLoading(true)
        
        try {
            await api.post("/users", { name, email, password })
            toast.success("Cadastrado efetuado com sucesso!")
            navigate("/login")
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    function verifyEnter(e){
        if(e.key === 'Enter') handleSignUp()
    }

    return(
        <Container>

            <ToastContainer
            position="bottom-right"
            />

            <Form action="">

                <h1>Criar conta</h1>

                <Link to="/" className="back">
                    <FaArrowLeftLong /> Voltar ao início
                </Link>

                <FaUser className="user" />

                <InputText 
                icon={<FiUser />}
                type="text"
                placeholder="Nome..."
                onChange={e => setName(e.target.value)}
                required
                onKeyPress={e => verifyEnter(e)}
                autoFocus
                />

                <InputText 
                icon={<FiMail />}
                type="email"
                placeholder="E-mail..."
                onChange={e => setEmail(e.target.value)}
                required
                onKeyPress={e => verifyEnter(e)}
                />

                <InputText 
                icon={<FiLock />}
                type="password"
                placeholder="Senha..."
                onChange={e => setPassword(e.target.value)}
                required
                onKeyPress={e => verifyEnter(e)}
                />
                    
                <button
                onClick={handleSignUp}
                className={loading ? "button button-loading" : "button"}
                disabled={loading}
                >
                    <p className="button-text">
                        Criar conta
                    </p>
                </button>

                <div className="login">
                    <p>Já é membro ?</p>
                    <Link to="/login">
                        Faça o Login
                    </Link>
                </div>
            </Form>

            <Background />

        </Container>
    )
}