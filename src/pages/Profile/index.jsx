import { Container, Form, Avatar, Logout } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button"

import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { checkRepeat, validateEmail, validateName } from "../../utils/formatting";

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { api } from '../../service/api'
import { useAuth } from '../../context/AuthContext';
import { toast } from "react-toastify";

export function Profile(){
    const navigate = useNavigate()

    const { user, updateProfile, signOut } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate(){
        const updatedInfo = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
        }

        if(name.length < 5) return toast.warn("Informe seu nome completo.")
        if(email.length < 10) return toast.warn("Informe seu email completo.")

        const nameRepeat = checkRepeat(name)
        const emailRepeat = checkRepeat(email)

        if(nameRepeat && emailRepeat) return toast.error("Padrão de caracteres repetidos.")

        const validName = validateName(name)
        const validEmail = validateEmail(email)

        if(!validName) return toast.warn("Use apenas letras nome.")
        if(!validEmail) return toast.error("Este não é um email válido.")

        const updatedUser = Object.assign(user, updatedInfo)
        try {
            await updateProfile(updatedUser, avatarFile)
            toast.success("Perfil atualizado")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    function handleSignOut(){
        navigate("/")
        signOut()
    }

    return(
        <Container>
            <Header />

            <h1>Perfil</h1>

                <span>
                    <Link to="/" className="back">
                        <FaArrowLeftLong /> Voltar ao início
                    </Link>

                    <Logout onClick={handleSignOut}>
                        Sair da conta
                    </Logout>
                </span>

            <Form action="">
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuario"
                    />
                    <label htmlFor="avatar">
                        
                        <FiCamera />

                        <input 
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                            />

                    </label>
                </Avatar>

                <InputText 
                icon={<FiUser />}
                type="text"
                placeholder="Nome..."
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <InputText 
                icon={<FiMail />}
                type="email"
                placeholder="E-mail..."
                value={email}
                onChange={e => setEmail(e.target.value)}

                />

                <InputText 
                icon={<FiLock />}
                type="password"
                placeholder="Senha..."
                onChange={e => setOldPassword(e.target.value)}
                required
                />

                <InputText 
                icon={<FiLock />}
                type="password"
                placeholder="Nova senha..."
                onChange={e => setNewPassword(e.target.value)}
                required
                />
                    
                <Button 
                title="Atualizar"
                onClick={handleUpdate}
                />

            </Form>

            <Footer />
        </Container>
    )
}
