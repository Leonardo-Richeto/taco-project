export function replaceSpecialChars(str) {
    str = str.replace(/[ÀÁÂÃÄÅ]/g, "A")
    str = str.replace(/[àáâãäå]/g, "a")
    str = str.replace(/[ÈÉÊË]/g, "E")
    str = str.replace(/[èéêë]/g, "e")
    str = str.replace(/[ÌÍÎÏ]/g, "I")
    str = str.replace(/[ìíîï]/g, "i")
    str = str.replace(/[ÒÓÔÕÖ]/g, "O")
    str = str.replace(/[òóôõö]/g, "o")
    str = str.replace(/[ÙÚÛÜ]/g, "U")
    str = str.replace(/[ùúûü]/g, "u")
    str = str.replace(/[Ç]/g, "C")
    str = str.replace(/[ç]/g, "c")
    
    return str.replace(/[^a-zA-Z0-9]/g, ' ');
}

export function replaceKey(value){
    const key = replaceSpecialChars(value).toLowerCase()

    if(key === 'kcal') return 'Kcal'
    if(key === 'kj') return 'kJ'
    if(key === 'proteina') return 'Proteina'
    if(key === 'carboidrato') return 'Carboidrato'
    if(key === 'gordura') return 'Gordura'
    if(key === 'fibra') return 'Fibra'
    if(key === 'calcio') return 'Cálcio'
    if(key === 'colesterol') return 'Colesterol'
    if(key === 'ferro') return 'Ferro'
    if(key === 'vitc' || key === 'vitamina c') return 'Vitamina C'
    if(key === 'fosforo') return 'Fósforo'
    if(key === 'acucares') return 'Açúcares'
    if(key === 'potassio') return 'Potássio'
    if(key === 'magnesio') return 'Magnésio'
    if(key === 'manganes') return 'Mangânes'
    if(key === 'sodio') return 'Sódio'
    if(key === 'cobre') return 'Cobre'
    if(key === 'zinco') return 'Zinco'
    if(key === 'retinol') return 'Retinol'
    if(key === 'tiamina') return 'Tiamina'
    if(key === 'piridoxina') return 'Piridoxina'
    if(key === 'riboflavina') return 'Riboflavina'
    if(key === 'niacina') return 'Niacina'    
    if(key === 'cafeina') return 'Cafeína'
    if(key === 'vitamina b12') return 'Vitamina B12'
    if(key === 'vitamina b6') return 'Vitamina B6'
    if(key === 'vitamina a') return 'Vitamina A'
    else{
        const firstLetter = key[0].toUpperCase()

        return key.replace(key[0], firstLetter)
    }
}

export function verifyWeight(key){
    const gram = [
        'proteina',
        'gordura',
        'carboidrato',
        'fibra',
        'açucares',
    ]

    const milligram = [
        'colesterol',
        'calcio',
        'magnesio',
        'manganes',
        'fosforo',
        'ferro',
        'sodio',
        'potassio',
        'cobre',
        'zinco',
        'tiamina',
        'riboflavina',
        'piridoxina',
        'niacina',
        'vitc',
        'vitamina c',
        'cafeina',
        'vitamina a',
        'vitamina b12',
        'vitamina b6'
    ]

    const microgram = ['retinol']

    if(key === 'kcal' || key === 'kJ') return ''
    if(gram.includes(key)) return 'g'
    if(milligram.includes(key)) return 'mg'
    if(microgram.includes(key)) return 'mcg'
    else return ''
}

export function handleVerifyNumber(e){
    const allowedKeys = [8, 37, 38, 39, 40, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 188, 190]
    
    if(!allowedKeys.includes(e.keyCode)) e.preventDefault()
}

export function handleVerifyWeight(e){
    const enteredWeight = parseFloat(e.target.value)

    return !isNaN(enteredWeight) ? enteredWeight : 0
}

export function validateName(string){
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/
    return regex.test(string)
}

export function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export function checkRepeat(string){
    const regex = /(.)\1{2,}/;
    return regex.test(string);
}

export function tips(input){
    const string = replaceSpecialChars(input.toLowerCase())

    if(string.includes('ovo')) return 'Um ovo médio tem aproximadamente 50g.'
    if(string.includes('pao')) return 'Uma unidade de pão francês tem aproximadamente 50g.'
    if(string.includes('frances')) return 'Uma unidade de pão francês tem aproximadamente 50g.'
}