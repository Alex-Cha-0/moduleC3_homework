function ElectricAppliances(name, state = false, weight) {
    this.name = name
    this.state = state
    this.weight = weight
}

ElectricAppliances.prototype.getWt = function (amperage, voltage) {
    if (this.state === true) {
        // console.log(`Мощность "${this.name}" равна ${amperage * voltage} w`)
        return amperage * voltage
    } else {
        // console.log(`Мощность "${this.name}" равна 0 w, так как прибор выключен`)
        return 0
    }
}

ElectricAppliances.prototype.getState = function () {
    if (this.state === true) {
        return 'включен'
    } else {
        return 'выключен'
    }
}

ElectricAppliances.prototype.getPcDescription = function (amperage, voltage) {

    console.log(`Это ${this.name}, бренда ${this.brand}, тип - ${this.type}, он в данный момент ${this.getState()} и его потребляемая мощность равна ${this.getWt(amperage, voltage)}w, 
    вес составляет ${this.weight}g`,)
}

ElectricAppliances.prototype.getSmartPhoneDescription = function () {
    console.log(`Это ${this.name}, бренда ${this.brand}, он сейчас ${this.getState()}, диагональ экрана составляет ${this.screen} дюйма`)
}

ElectricAppliances.prototype.stateOn = function () {
    return this.state = true
}

ElectricAppliances.prototype.stateOff = function () {
    return this.state = false
}

function Computer(name, brand, functionality, type, weight) {
    this.name = name;
    this.brand = brand;
    this.functionality = functionality;
    this.type = type;
    this.state = false;
    this.weight = weight
}

function Smartphone(name, brand, screen) {
    this.name = name;
    this.brand = brand;
    this.screen = screen
    this.state = false;
}

Computer.prototype = new ElectricAppliances();
Smartphone.prototype = new ElectricAppliances();

const workPC = new Computer('Персональный Компьютер', 'Mac', 'Для работы с дизайном проэкта', 'notebook', 5000)
workPC.stateOn()
workPC.getPcDescription(1, 220)

const redmi10Pro = new Smartphone('Смартфон', 'Xaomi', 6, 2)
redmi10Pro.stateOff()
redmi10Pro.getSmartPhoneDescription()

