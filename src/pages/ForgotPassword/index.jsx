import { InputText } from "../../components/InputText";
import { Container, Form } from "./styles";
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

import { useState } from "react";
import { api } from "../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi"
import { FaArrowLeftLong } from "react-icons/fa6";

export function ForgotPassword(){
    const [email, setEmail] = useState()

    async function handleForgotPassword(){
        if(!email) return toast.warn("Informe seu email")

        try {
            const response = await api.post("/forgot-password/create-token", { email })
            toast.success(response.data.message)
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    function verifyEnter(e){
        if(e.key === 'Enter') handleForgotPassword()
    }

    return(
        <Container>

        <ToastContainer
        position="bottom-right" 
        />

        <Form action="">

            <h1>Esqueci minha senha</h1>
            
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
            required
            />

            <Button
            title="Enviar link para este e-mail"
            onClick={handleForgotPassword}
            />
        </Form>
 
        </Container>
    )
}