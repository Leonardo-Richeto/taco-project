import { Container } from "./styles";
import { Button } from "../Button";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { editedCalculation } from "../../utils/calculations";
import { GlobalContext } from "../../context/GlobalContext";
import { api } from "../../service/api";
import { MdIosShare } from "react-icons/md";

import { toast } from 'react-toastify';

export function DietCard({ diet }){
    const [createdAt, setCreatedAt] = useState('')
    const [updatedAt, setUpdatedAt] = useState('')

    const [total, setTotal] = useState({
        totalWeight: 0,
        totalProtein: 0,
        totalCarbohydrate: 0,
        totalFat: 0,
        totalKcal: 0,
    })

    const { setDiet, updatePage, setUpdatePage } = useContext(GlobalContext)
    const navigate = useNavigate()

    function handleEditDiet(){
        setDiet(diet)
        navigate("/")
    }
    
    async function handleDeleteDiet(){
        try {
            await api.delete(`/diets/${diet.diet_id}`)
            toast.success('Dieta excluida.')
            setUpdatePage(!updatePage)
        } catch (error) {
            toast.error("Erro ao excluir.")
        }
    }

    function handleShareDiet(){
        
    const sharedDiet = `
*${diet.dietName}*

${
diet.meals.map(meal =>
`*${meal.mealName}*
${meal.foods.map(food => `${food.amount}g ${food.nome}
`).join('')}
`).join('')}
*Total:*
Peso: ${total.totalWeight}
Proteínas: ${total.totalProtein}
Carboidratos: ${total.totalCarbohydrate}
Gorduras: ${total.totalFat}
Calorias: ${total.totalKcal}
`
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(sharedDiet)}`, '_blank');
    }

    useEffect(() => {
        const totalInfo = diet.meals.reduce((mealAccumulator, meal) => {
            const mealTotal = meal.foods.reduce((foodAccumulator, food) => {
              const protein = editedCalculation(food.proteina)
              const carb = editedCalculation(food.carboidrato)
              const fat = editedCalculation(food.gordura)
              const kcal = editedCalculation(food.kcal)
        
              return {
                totalWeight: foodAccumulator.totalWeight += food.amount,
                totalProtein: foodAccumulator.totalProtein += protein,
                totalCarbohydrate: foodAccumulator.totalCarbohydrate += carb,
                totalFat: foodAccumulator.totalFat += fat,
                totalKcal: foodAccumulator.totalKcal += kcal,
              }
              }, {
                totalWeight: 0,
                totalProtein: 0,
                totalCarbohydrate: 0,
                totalFat: 0,
                totalKcal: 0,
              })
        
              return {
                totalWeight: mealAccumulator.totalWeight += mealTotal.totalWeight,
                totalProtein: mealAccumulator.totalProtein += mealTotal.totalProtein,
                totalCarbohydrate: mealAccumulator.totalCarbohydrate += mealTotal.totalCarbohydrate,
                totalFat: mealAccumulator.totalFat += mealTotal.totalFat,
                totalKcal: mealAccumulator.totalKcal += mealTotal.totalKcal,
            }
            }, {
                totalWeight: 0,
                totalProtein: 0,
                totalCarbohydrate: 0,
                totalFat: 0,
                totalKcal: 0,
            })
        
            setTotal(totalInfo)

          const created = new Date(diet.created_at).toLocaleDateString()
          const updated = new Date(diet.updated_at).toLocaleDateString()

          setCreatedAt(created)
          setUpdatedAt(updated)
      }, [diet])

    return(
        <Container>
            <span>
                <p></p>
                <h2>{diet.dietName}</h2>
                <button
                title="Enviar dieta"
                className="share"
                onClick={handleShareDiet}
                >
                    <MdIosShare />
                </button>
            </span>

            <div className="macros">
                <div>
                    <p>PTN</p>
                    <p>{total.totalProtein.toFixed(1)}</p>
                </div>
                <div>
                    <p>CHO</p>
                    <p>{total.totalCarbohydrate.toFixed(1)}</p>
                </div>
                <div>
                    <p>FAT</p>
                    <p>{total.totalFat.toFixed(1)}</p>
                </div>
                <div>
                    <p>Kcal</p>
                    <p>{total.totalKcal.toFixed(0)}</p>
                </div>
            </div>

            <div className="dates">
                <div>
                    <p>Criado em:</p>
                    <p>{createdAt}</p>
                </div>
                <div>
                    <p>Alterado em:</p>
                    <p>{updatedAt}</p>
                </div>
            </div>

            <div className="buttons">
                <Button
                title="Excluir"
                onClick={handleDeleteDiet}
                />

                <Button
                title="Editar"
                onClick={handleEditDiet}
                />
            </div>

        </Container>
    )
}