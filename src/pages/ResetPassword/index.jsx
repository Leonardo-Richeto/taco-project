import { InputText } from "../../components/InputText";
import { Container, Form } from "./styles";
import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import { api } from "../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiLock } from "react-icons/fi"
import { FaArrowLeftLong } from "react-icons/fa6";

export function ResetPassword(){
    const { token } = useParams()
    const [newPassword, setNewPassword] = useState()
    const [loading, setLoading] = useState(false)

    async function handleResetPassword(){
        if(!newPassword) return toast.warn("Informe a nova senha.")
        setLoading(true)

        try {
            const response = await api.post("/forgot-password/reset-password/:token", { token, newPassword })
            toast.success(response.data.message)
            setLoading(false)
            
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    function verifyEnter(e){
        if(e.key === 'Enter') handleResetPassword()
    }

    return(
        <Container>

        <ToastContainer
        position="bottom-right" 
        />

        <Form action="">

            <h1>Redefinição de senha</h1>
            
            <Link to="/" className="back">
                <FaArrowLeftLong /> Voltar ao início
            </Link>

            <InputText
            className="input"
            icon={<FiLock />}
            placeholder="Nova senha..."
            type="password"
            onChange={e => setNewPassword(e.target.value)}
            onKeyPress={e => verifyEnter(e)}
            />

            <button
            onClick={handleResetPassword}
            className={loading ? "button button-loading" : "button"}
            disabled={loading}
            >
                <p className="button-text">
                    Enviar email
                </p>
            </button>
        </Form>
 
        </Container>
    )
}