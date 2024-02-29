/* eslint-disable react/prop-types */
import { Container } from "./styles.js";
import { calculateWeight, typeOfWeight } from "../../utils/calculations.js";

import { MdAddCircleOutline } from "react-icons/md";

import { Button } from "../Button/index.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";

export function FoodCard({ id, food, weight }){
    const { handleAddFood } = useContext(GlobalContext)

    return(
        <Container className="card">
            <div>
                <p className={id}>{food.nome}</p>
            </div>
            <section>
                <div>
                    <p>Proteina</p>
                    <p>{calculateWeight(food.proteina, weight, typeOfWeight.grams)}</p>
                </div>
                <div>
                    <p>Carboidrato</p>
                    <p>{calculateWeight(food.carboidrato, weight, typeOfWeight.grams)}</p>
                </div>
                <div>
                    <p>Gordura</p>
                    <p>{calculateWeight(food.gordura, weight, typeOfWeight.grams)}</p>
                </div>
                <div>
                    <p>Fibras</p>
                    <p>{calculateWeight(food.fibra, weight, typeOfWeight.grams)}</p>
                </div>
                <div>
                    <p>Kcal</p>
                    <p>{calculateWeight(food.kcal, weight, typeOfWeight.none)}</p>
                </div>
            </section>

            <span>
                <Link to={`/details/${food.id}`}>
                <p>
                    Ver Completo...
                </p>
                </Link>

                <span>
                    <Button
                    title="Adicionar a dieta "
                    id={food.id}
                    onClick={e => handleAddFood(e.target)}
                    />
                    <MdAddCircleOutline id={food.id} onClick={e => handleAddFood(e.target)}/>
                </span>
            </span>

        </Container>
    )
}