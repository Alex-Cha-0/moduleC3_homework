function f(string, obj) {
    let result
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === string) {
                result = true
            } else {
                result = false
            }
        }
    }
    return result
}

objk = {
    name: 'Alex',
    city: 'Moskow',
    career: 'Js developer'
}

console.log(f('career', objk))