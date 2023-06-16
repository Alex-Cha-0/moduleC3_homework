function f(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(`ключ - ${key}, значение - ${obj[key]}`)
        }
    }
}

objk = {
    name: 'Alex',
    city: 'Moskow',
    career: 'Js developer'
}

f(objk)