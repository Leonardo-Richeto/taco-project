/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { FaBalanceScaleLeft } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";


export function InputWeight(){
    const { weight } = useContext(GlobalContext)
    const [isFocused, setIsFocused] = useState(false)

    function handleFocus(){
        const input = document.querySelector('.input-weight')
        input.focus()
        setIsFocused(true)
    }

    function handleBlur(){
        setIsFocused(false)
    }

    return(
        <Container onClick={handleFocus}>
            <FaBalanceScaleLeft className="weight-svg"/>
            <input
            type="text"
            maxLength="3"
            className="input-weight"
            placeholder={isFocused ? '' : weight}
            onBlur={handleBlur}
            />
            <p>g</p>
            <CiEdit className="edit-svg" onClick={handleFocus}/>
        </Container>
    )
}
