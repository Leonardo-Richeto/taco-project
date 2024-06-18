const exceptions = ['NA', '*', 'Tr']

export function editSelectedFood(selectedFood, weight){
  const editedFood = {...selectedFood, amount: weight}

  editedFood.proteina = calculateWeight(selectedFood.proteina, weight)
  editedFood.carboidrato = calculateWeight(selectedFood.carboidrato, weight)
  editedFood.gordura = calculateWeight(selectedFood.gordura, weight)
  editedFood.fibra = calculateWeight(selectedFood.fibra, weight)
  editedFood.kcal = calculateWeight(selectedFood.kcal, weight)
  
  return editedFood
}

export function calculateWeight(value, weight){
  if(typeof value === 'number') return value

  if(exceptions.includes(value)){
    const formattedValue = 0

    return formattedValue.toFixed(1)
  }

  const number = parseFloat(value.replace(',', '.'))

  const result = (number / 100) * weight

  return result.toFixed(1)
}

export function editedCalculation(value){
  if(typeof value === 'number') return Number(value.toFixed(1))

  if(exceptions.includes(value)) return 0

  const result = parseFloat(value.replace(',', '.'))

  return Number(result)
}