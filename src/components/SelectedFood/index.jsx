/* eslint-disable react/prop-types */
import { Container, InitialAddFood } from "./styles";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { handleVerifyNumber } from "../../utils/formatting";
import { editedCalculation } from "../../utils/calculations";

import { MdDeleteForever } from "react-icons/md"

import { taco } from "../../assets/taco";

export function SelectedFood({ food, mealIndex, foodIndex }){
  const { diet, setDiet, setMealFocus } = useContext(GlobalContext)
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(){
    setIsFocused(true)
  }

  function handleBlur(){
    setIsFocused(false)
  }

  function handleChangeAmount(e){
    const newAmount = Number(e)
    
    const newFood = taco.find(food => food.nome === diet.meals[mealIndex].foods[foodIndex].nome)

    const updatedDiet = {...diet}
    const updatedMeal = {...diet.meals[mealIndex]}
    const updatedFood = {...newFood}

    const newProtein = editedCalculation(newFood.proteina) / 100 * newAmount
    const newCarb = editedCalculation(newFood.carboidrato) / 100 * newAmount
    const newFat = editedCalculation(newFood.gordura) / 100 * newAmount
    const newFiber = editedCalculation(newFood.fibra) / 100 * newAmount
    const newKcal = editedCalculation(newFood.kcal) / 100 * newAmount

    updatedFood.amount = newAmount
    updatedFood.proteina = String(newProtein.toFixed(1))
    updatedFood.carboidrato = String(newCarb.toFixed(1))
    updatedFood.gordura = String(newFat.toFixed(1))
    updatedFood.fibra = String(newFiber.toFixed(1))
    updatedFood.kcal = String(newKcal.toFixed(1))

    updatedDiet.meals[mealIndex] = updatedMeal
    updatedMeal.foods[foodIndex] = updatedFood

    setDiet(updatedDiet)
  }

  function handleDeleteFood(id){
    const updatedDiet = {...diet}

    updatedDiet.meals[mealIndex].foods = updatedDiet.meals[mealIndex].foods.filter(food => food.id !== id)

    if(updatedDiet.meals[mealIndex].foods.length === 0){
      const dietWithoutEmptyMeals = {...updatedDiet}
      
      delete dietWithoutEmptyMeals.meals[mealIndex]
      
      const filteredMeals = dietWithoutEmptyMeals.meals.filter(meal => meal !== undefined)
      
      dietWithoutEmptyMeals.meals = filteredMeals

      if(dietWithoutEmptyMeals.meals.length === 0){
        const firstMeal = [{
          mealName: "Refeição 1",
          foods: []
        }]

        dietWithoutEmptyMeals.meals = firstMeal
        setMealFocus(0)
        return setDiet(dietWithoutEmptyMeals)
      }

      setMealFocus(dietWithoutEmptyMeals.meals.length - 1)
      return setDiet(dietWithoutEmptyMeals)
    }

    setDiet(updatedDiet)
  }
  

    return(
        <Container className="selected-food">
          <p
          onClick={handleFocus}
          >
            {
              isFocused
              ?
              <input
              type="text"
              maxLength="3"
              onBlur={handleBlur}
              onKeyDown={e => handleVerifyNumber(e)}
              onChange={e => handleChangeAmount(e.target.value)}
              autoFocus
              />
              :
            food.amount.toFixed(0)
            }
          </p>
          <p title={food.nome}>{food.nome}</p>
          <p>{food.proteina}</p>
          <p>{food.carboidrato}</p>
          <p>{food.gordura}</p>
          <p>{food.fibra}</p>
          <p>{food.kcal}</p>

          <button
          onClick={e => handleDeleteFood(e.target.id)}
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