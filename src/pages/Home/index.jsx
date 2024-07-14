import { Container, NewDietButton } from "./styles.js"
import { Header } from "../../components/Header"
import { InputWeight } from "../../components/InputWeight"
import { InputText } from "../../components/InputText"
import { Section } from "../../components/Section"
import { MealCard } from "../../components/MealCard/index.jsx"
import { SelectedFood, InitialFood } from "../../components/SelectedFood"
import { FoodCard } from '../../components/FoodCard'
import { Footer } from "../../components/Footer/index"
import { Subtitle } from "../../components/Subtitle"
import { Total } from "../../components/Total"

import { toast } from 'react-toastify';

import { replaceSpecialChars, tips } from '../../utils/formatting'
import { editedCalculation } from "../../utils/calculations.js"

import { FiSearch, FiPlus } from 'react-icons/fi'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone, MdOutlineClear } from "react-icons/md";

import { useEffect, useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { taco } from '../../assets/taco.js'
import { useAuth } from "../../context/AuthContext";
import { api } from "../../service/api.js"

export function Home(){
  const { user } = useAuth()

  const [tipShown, setTipShown] = useState(false)
  const [editing, setEditing] = useState(false)
  const [totalDiet, setTotalDiet] = useState({
    totalWeight: 0,
    totalProtein: 0,
    totalCarbohydrate: 0,
    totalFat: 0,
    totalFiber: 0,
    totalKcal: 0,
})

  const {
    weight,
    search,
    setSearch,
    input,
    setInput,
    mealFocus,
    setMealFocus,
    diet,
    setDiet
  } = useContext(GlobalContext)
  
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

function handleSearch(e){
  if(e.key === 'Enter') setInput(e.target.value)
}

function handleNewMeal(){
  const lastMeal = diet.meals.length - 1

  if(diet.meals[lastMeal].foods.length === 0) return toast.info('Você já possui uma refeição vazia!')
  if(diet.meals.length < 8){
    setMealFocus(diet.meals.length)

    const updatedDiet = {...diet}

    const newMeal = {
      mealName: `Refeição ${mealFocus + 2}`,
      foods: []
    } 

    updatedDiet.meals = [...updatedDiet.meals, newMeal]
    setDiet(updatedDiet)
  }
}

function handleEditDietName(name){
    const updatedDiet = {...diet}

    updatedDiet.dietName = name
    setDiet(updatedDiet)
}

async function handleSaveDiet(){
  if(!user) return window.alert("Faça o login ou crie uma conta para salvar sua dieta.")
  if(diet.meals[0].foods.length === 0) return toast.warning('Impossivel fazer uma dieta sem alimentos!')

  try {
    const response = await api.get("diets")
    const dietsResponse = response.data
    const dietExists = dietsResponse.some(responseDiet => responseDiet.diet_id === diet.diet_id)
    let shoudSave = true

    if(dietExists){
      shoudSave = false

      try {
        await api.put("/diets", {
          diet
        })
        toast.success("Dieta alterada com sucesso.")
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }else{
      const verifyNameDiet = dietsResponse.some(item => item.dietName === diet.dietName)
      if(verifyNameDiet){
        shoudSave = window.confirm("Você já possui uma dieta com este nome, deseja salvar mesmo assim ?")
      }
      if(shoudSave){
        try {
          await api.post("/diets", {
            diet
          })
          toast.success("Dieta salva com sucesso.")
        } catch (error) {
          toast.error(error.response.data.message)
        }
      }
    }
  } catch (error) {
    toast.error(error.response.data.message)
  }
}
  
function handleClearDiet(){
  if(diet.meals[0].foods.length === 0) return

  const clearDiet = window.confirm("Você perderá as alterações caso não tenha salvado, deseja continuar ?")

  if(clearDiet){
    const initialDiet = {
      diet_id: null,
      dietName: "Nome da dieta",
      meals: [{
        mealName: "Refeição 1",
        foods: []
      }]
    }
    
    setDiet(initialDiet)
    setMealFocus(initialDiet.meals.length -1)
    toast.success("Dieta limpa!")
  }
}

useEffect(() => {
  const normalizedInput = replaceSpecialChars(input).toLowerCase()
  const terms = normalizedInput.split(' ')

  const searchInput = document.querySelector('.search-input')

  const tip = tips(searchInput.value) 
  if(tip){
    if(!tipShown) toast.info(tip,{
      position: "bottom-center",
      autoClose: 6000
    })

    setTipShown(true)
  }

  const filteredFoods = taco.filter(food => {
    const foodName = replaceSpecialChars(food.nome).toLowerCase()

    return terms.every(term => foodName.includes(term))
  })
    const limitedSearch = filteredFoods.slice(0, 30)
    
    setSearch(normalizedInput !== '' ? limitedSearch : [])

    if(searchInput.value === ''){
      searchInput.value = input
      setTipShown(false)
    } 
},[input])

useEffect(() => {
  const totalInfo = diet.meals.reduce((mealAccumulator, meal) => {
    const mealTotal = meal.foods.reduce((foodAccumulator, food) => {
      const protein = editedCalculation(food.proteina)
      const carb = editedCalculation(food.carboidrato)
      const fat = editedCalculation(food.gordura)
      const fiber = editedCalculation(food.fibra)
      const kcal = editedCalculation(food.kcal)

      return {
        totalWeight: foodAccumulator.totalWeight += food.amount,
        totalProtein: foodAccumulator.totalProtein += protein,
        totalCarbohydrate: foodAccumulator.totalCarbohydrate += carb,
        totalFat: foodAccumulator.totalFat += fat,
        totalFiber: foodAccumulator.totalFiber += fiber,
        totalKcal: foodAccumulator.totalKcal += kcal,
      }
      }, {
        totalWeight: 0,
        totalProtein: 0,
        totalCarbohydrate: 0,
        totalFat: 0,
        totalFiber: 0,
        totalKcal: 0,
      })

      return {
        totalWeight: mealAccumulator.totalWeight += mealTotal.totalWeight,
        totalProtein: mealAccumulator.totalProtein += mealTotal.totalProtein,
        totalCarbohydrate: mealAccumulator.totalCarbohydrate += mealTotal.totalCarbohydrate,
        totalFat: mealAccumulator.totalFat += mealTotal.totalFat,
        totalFiber: mealAccumulator.totalFiber += mealTotal.totalFiber,
        totalKcal: mealAccumulator.totalKcal += mealTotal.totalKcal,
    }
    }, {
        totalWeight: 0,
        totalProtein: 0,
        totalCarbohydrate: 0,
        totalFat: 0,
        totalFiber: 0,
        totalKcal: 0,
    })

    setTotalDiet(totalInfo)
}, [diet])

  return(
    <Container>

      <Header />

      <h1>Informação Nutricional</h1>

        <Section>

          <span className="diet-span">
            {
              editing
              ?
              <input
              type="text"
              maxLength="25"
              placeholder={diet.dietName}
              onBlur={handleBlur}
              onKeyDown={e => handleKeyDown(e.key)}
              onChange={name => handleEditDietName(name.target.value)}
              autoFocus
              />
              :
              <h2 onClick={handleEditing}>
                  {diet.dietName} <CiEdit />
              </h2>
            }
          </span>

          {
            diet.meals.map((meal, mealIndex) => (
              <MealCard
                key={mealIndex}
                meals={diet.meals[mealIndex]}
                mealIndex={mealIndex}
              >

                {
                meal.foods.length === 0 ? <InitialFood title="Os alimentos serão adicionados aqui" /> 
                  :
                meal.foods.map((food, foodIndex) => (
                  <SelectedFood 
                    key={foodIndex}
                    food={food}
                    foodIndex={foodIndex}
                    mealIndex={mealIndex}
                  />
                  ))
                } 
              </MealCard>
            ))
          }

          {
            diet.meals.length < 8
            ?
            <NewDietButton
            className="new-diet-button"
            onClick={handleNewMeal}
            >
            <p><FiPlus /> Nova refeição</p>
          </NewDietButton>
          :
          <div></div>
          }

          <Total total={totalDiet}/>

          <Section className="save-delete-buttons">
          <button className="delete-button" onClick={handleClearDiet}>
                <p>Limpar dieta</p>
                <MdOutlineClear />
            </button>

            <button className="save-button" onClick={handleSaveDiet}>
                <p>Salvar dieta</p>
                <MdOutlineDone />
            </button>
          </Section>

        </Section>

          <Section className="section-inputs">
            <InputText
            maxLength="30"
            icon={<FiSearch />}
            autoFocus
            type="search"
            className="search-input"
            placeholder="Pesquisar alimento..."
            onKeyDown={e => handleSearch(e)}
            />

            <InputWeight />
            
          </Section>

        {
          search.length === 0
          ?
          <Subtitle />
          :
      <Section className="section-cards">
          {
            search.map(food => (
              <FoodCard
              key={String(food.id)}
              nome={food.nome}
              food={food}
              weight={weight}
              />
          ))
          }
      </Section>
        }

      <Footer>
        <p>Developed by <a href="https://github.com/Leonardo-Richeto" target="blank">Leonardo Richeto</a>.</p>
      </Footer>

    </Container>
  )
}