/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { useContext, useState, useEffect } from "react";
import { editedCalculation } from "../../utils/calculations";

import { CiEdit } from "react-icons/ci";
import { GlobalContext } from "../../context/GlobalContext";
import { RiPushpinLine } from "react-icons/ri";
import { RiUnpinLine } from "react-icons/ri";

export function MealCard({ children, meals, mealIndex }){
    const {
        diet,
        setDiet,
        mealFocus,
        setMealFocus
    } = useContext(GlobalContext)

    const [editing, setEditing] = useState(false)
    const [total, setTotal] = useState({
        totalWeight: 0,
        totalProtein: 0,
        totalCarbohydrate: 0,
        totalFat: 0,
        totalFiber: 0,
        totalKcal: 0,
    })

    function handleEditMealName(name){
        const updatedDiet = {...diet}
        const updatedMeal = {...meals}

        updatedMeal.mealName = name

        updatedDiet.meals[mealIndex] = updatedMeal

        setDiet(updatedDiet)
    }
      
    function handleEditing(){
        setEditing(true)
    }

    function handleBlur(){
        setEditing(false)
    }

    function handleKeyDown(e){
        if(e === 'Enter'){
            setEditing(false)
        }
    }

    function handleSetMealFocus(){
        setMealFocus(mealIndex)
    }

    useEffect(() => {
        const totalInfo = meals.foods.reduce((accumulator, food) => {
      
          accumulator.totalWeight += editedCalculation(food.amount)
          accumulator.totalProtein += editedCalculation(food.proteina)
          accumulator.totalCarbohydrate += editedCalculation(food.carboidrato)
          accumulator.totalFat += editedCalculation(food.gordura)
          accumulator.totalFiber += editedCalculation(food.fibra)
          accumulator.totalKcal += editedCalculation(food.kcal)
          
          return accumulator;
        }, {
          totalWeight: 0,
          totalProtein: 0,
          totalCarbohydrate: 0,
          totalFat: 0,
          totalFiber: 0,
          totalKcal: 0,
        });

        setTotal(totalInfo)

      },[diet])

    return(
        <Container className={mealFocus === mealIndex ? '' : 'unfixed'}>
            <span>
                {
                    editing
                    ?
                    <input
                    type="text"
                    maxLength="35"
                    placeholder={meals.mealName}
                    onBlur={handleBlur}
                    onKeyDown={e => handleKeyDown(e.key)}
                    onChange={name => handleEditMealName(name.target.value)}
                    autoFocus
                    />
                    :
                    <p
                    className="meal-title"
                    onClick={handleEditing}
                    >
                        {meals.mealName} <CiEdit />
                    </p>
                }
            </span>
            <div className="macros">
                <p>Peso</p>
                <p>Alimento</p>
                <p>Proteina</p>
                <p>Carboidrato</p>
                <p>Gordura</p>
                <p>Fibra</p>
                <p>Kcal</p>
            </div>

            {children}
           
            <div className="total">
                <p>{total.totalWeight.toFixed(0)}</p>
                <p>Total</p>
                <p>{total.totalProtein.toFixed(1)}</p>
                <p>{total.totalCarbohydrate.toFixed(1)}</p>
                <p>{total.totalFat.toFixed(1)}</p>
                <p>{total.totalFiber.toFixed(1)}</p>
                <p>{total.totalKcal.toFixed(1)}</p>
                <button onClick={handleSetMealFocus} title="Fixar esta refeição">
                    {mealFocus === mealIndex
                    ?
                    <RiPushpinLine className="pinned"/>
                    :
                    <RiUnpinLine className="unpinned"/>}
                </button>
            </div>
            
        </Container>
    )
}