/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { FaRegUserCircle } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsTrophy } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Header(){
    const {colorTheme, setColorTheme} = useContext(GlobalContext)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    function toggleTheme(){
        setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        function handleResize() {
          setIsSmallScreen(window.innerWidth < 600)
        }
    
        window.addEventListener('resize', handleResize());

      },[window.innerWidth])
      
    return(
        <Container>
            <nav>
                <ul>
                    <li><Link to="/">{ isSmallScreen ? <IoHomeOutline /> : 'Inicio'}</Link></li>
                    <li><Link to="/ranking">{ isSmallScreen ? <BsTrophy /> : 'Ranking'}</Link></li>
                    <li><Link to="/about">{ isSmallScreen ? <IoIosInformationCircleOutline /> : 'Sobre'}</Link></li>
                </ul>
                <div>
                    <LuSunMoon onClick={toggleTheme}/>
                    
                    <Link to="/login">
                        <FaRegUserCircle />
                    </Link>
                </div>
            </nav>
        </Container>
    )
}
