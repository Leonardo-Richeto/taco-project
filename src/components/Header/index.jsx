/* eslint-disable react/prop-types */
import { Container, Profile } from "./styles";

import { LuSunMoon } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsTrophy } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi"
import avatarPlaceholder from '../../assets/user.svg'

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ColorContext } from "../../context/ColorContext";
import { api } from "../.././service/api"
import { useAuth } from "../../context/AuthContext";

export function Header(){
    const { user } = useAuth()
    const { colorTheme, setColorTheme } = useContext(ColorContext)

    const [avatar, setAvatar] = useState()
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600)

    function toggleTheme(){
        const newTheme = colorTheme === 'light' ? 'dark' : 'light'

        setColorTheme(newTheme)
        localStorage.setItem("@autodieta:colorTheme", newTheme)
    }

    useEffect(() => {
        function handleResize() {
          setIsSmallScreen(window.innerWidth < 600)
        }
    
        window.addEventListener('resize', handleResize());

      },[window.innerWidth])

      useEffect(() => {
        if(user){
            const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
            setAvatar(avatarUrl)            
        }
      }, [user])

    return(
        <Container>
            <nav>
                <ul>
                    <li><Link to="/" >{ isSmallScreen ? <IoHomeOutline /> : 'Inicio'}</Link></li>
                    <li><Link to="/ranking">{ isSmallScreen ? <BsTrophy /> : 'Ranking'}</Link></li>
                    <li><Link to="/about">{ isSmallScreen ? <IoIosInformationCircleOutline /> : 'Sobre'}</Link></li>
                </ul>
                
                <div>
                    <LuSunMoon
                    onClick={toggleTheme}
                    className="toggle-theme"
                    />
                    
                    {
                        user
                        ?
                        <Profile>
                                <Link to="/profile">
                                    {
                                        user
                                        ? 
                                        <img src={avatar}
                                        alt="Foto do usuário"
                                        />
                                        :
                                        <FiUser />
                                    }
                                </Link>
        
                            <div className="user">
                                <Link to="/profile" className="welcome">
                                    <strong>{`Olá, ${user.name}`}</strong>
                                </Link>
                                <Link to="/diets">Minhas dietas</Link>
                            </div>
                        </Profile>
                        :
                        <Link to="/login">
                            <FiUser />
                        </Link>
                    }
                </div>
            </nav>
        </Container>
    )
}
