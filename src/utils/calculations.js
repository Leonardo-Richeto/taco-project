export const typeOfWeight = {
    grams: 'g',
    milligrams: 'mg',
    none: ''
}

export function calculateWeight(value, weight, typeOfWeight){
    if(value.includes(',')){
      const result = parseFloat((value.replace(',', '.')) / 100) * weight
      
      return typeOfWeight === 'g' ? `${result.toFixed(1).toString().replace('.', ',')} ${typeOfWeight}` : `${result.toFixed(2).toString().replace('.', ',')} ${typeOfWeight}`
    }else{
      const result = (parseFloat(value) / 100) * weight
      
      if(!isNaN(result)){
        return typeOfWeight === 'g' || typeOfWeight === '' ? `${result.toFixed(1).toString().replace('.', ',')} ${typeOfWeight}` : `${result.toFixed(2).toString().replace('.', ',')} ${typeOfWeight}`
      }else{
        return value
      }
    }
}

export function editedCalculation(value){
    if(value.includes(',')){
      return parseFloat(value.replace(',', '.'))

    }else{
      const result = parseFloat(value)
      
      return !isNaN(result) ? result : 0
    }
}