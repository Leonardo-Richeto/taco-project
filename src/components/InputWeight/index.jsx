/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { handleVerifyWeight, handleVerifyNumber } from "../../utils/formatting";

import { FaBalanceScaleLeft } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";


export function InputWeight(){
    const { weight, setWeight } = useContext(GlobalContext)
    const [isFocused, setIsFocused] = useState(false)
    
    const input = document.querySelector('.input-weight')

    function handleChangeWeight(e){
        const result = handleVerifyWeight(e)
        
        setWeight(result)
    }

    function handleFocus(){
        input.focus()
        input.value = ''
        setIsFocused(true)
    }

    function handleBlur(){
        setIsFocused(false)
    }

    return(
        <Container onClick={handleFocus}>
            <div>
                <FaBalanceScaleLeft className="weight-svg"/>
                <input
                type="text"
                maxLength="3"
                className="input-weight"
                placeholder={isFocused ? '' : weight}
                onBlur={handleBlur}
                onKeyDown={e => handleVerifyNumber(e)}
                onChange={e => handleChangeWeight(e)}
                />
                <p>g</p>
            </div>
            <CiEdit className="edit-svg" onClick={handleFocus}/>
        </Container>
    )
}
