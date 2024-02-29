/* eslint-disable react/prop-types */
import { Container, InitialAddFood } from "./styles";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { MdDeleteForever } from "react-icons/md"

export function SelectedFood({ food }){
  const { addedFood, setAddedFood } = useContext(GlobalContext)

    return(
        <Container className="selected-food">
          <p>{food.amount} g</p>
          <p>{food.nome}</p>
          <p>{food.proteina}</p>
          <p>{food.carboidrato}</p>
          <p>{food.gordura}</p>
          <p>{food.fibra}</p>
          <p>{food.kcal}</p>

          <button
          onClick={e => setAddedFood(addedFood.filter(food => food.id !== e.target.id))
          }
          id={food.id}
          >
            <MdDeleteForever onClick={e => e.stopPropagation()}/>
          </button>
            
      </Container>
    )
}

export function InitialFood({ title }){
  return(
    <InitialAddFood className="selected-food">
      <p>{title}</p>
    </InitialAddFood>
    
  )
}