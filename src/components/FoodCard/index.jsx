/* eslint-disable react/prop-types */
import { Container } from "./styles.js";
import { calculateWeight, editSelectedFood } from "../../utils/calculations";
import { Button } from "../Button/index.jsx";
import { Link } from "react-router-dom";
import { taco } from "../../assets/taco.js";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FoodCard({ id, food, weight }){
    const { diet, setDiet, mealFocus } = useContext(GlobalContext)

    function handleAddFood(e){        
        const selectedFood = taco.find(food => food.id === e.id)
  
        const isAlreadyAddedToMeal = diet.meals[mealFocus].foods.some(item => item.id === selectedFood.id)

        if(isAlreadyAddedToMeal) return toast.info("Este alimento ja foi adicionado a esta refeição!")

        if(diet.meals[mealFocus].foods.length === 5) return toast.warn("Limite de 5 alimentos por refeição")

        if(!isAlreadyAddedToMeal && diet.meals[mealFocus].foods.length < 5){
            const updatedDiet = {...diet}

            updatedDiet.meals[mealFocus].foods.push(editSelectedFood(selectedFood, weight))

            setDiet(updatedDiet)
            toast.success("Alimento adicionado")
        }
    }

    return(
        <Container className="card">
            <div>
                <p className={id}>{food.nome}</p>
            </div>
            <section>
                <div>
                    <p>Proteina</p>
                    <p>{calculateWeight(food.proteina, weight)}</p>
                </div>
                <div>
                    <p>Carboidrato</p>
                    <p>{calculateWeight(food.carboidrato, weight)}</p>
                </div>
                <div>
                    <p>Gordura</p>
                    <p>{calculateWeight(food.gordura, weight)}</p>
                </div>
                <div>
                    <p>Fibras</p>
                    <p>{calculateWeight(food.fibra, weight)}</p>
                </div>
                <div>
                    <p>Kcal</p>
                    <p>{calculateWeight(food.kcal, weight)}</p>
                </div>
            </section>

            <span>
                <Link to={`/details/${food.id}`}>
                    <p>
                        Ver Completo...
                    </p>
                </Link>

                <Button
                    title="Adicionar a dieta"
                    id={food.id}
                    onClick={e => handleAddFood(e.target)}
                />
            </span>

        </Container>
    )
}