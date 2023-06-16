class ElectricAppliances {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.state = false;
    }

    getState() {
        if (this.state === true) {
            return 'включен'
        } else {
            return 'выключен'
        }
    }

    stateOn() {
        return this.state = true
    }

    stateOff() {
        return this.state = false
    }

    getWt(amperage, voltage) {
        if (this.state === true) {
            return amperage * voltage
        } else {
            return 0
        }
    }

}

class Computers extends ElectricAppliances {
    constructor(name, brand, functionality, type, weight) {
        super();
        this.name = name;
        this.brand = brand;
        this.functionality = functionality;
        this.type = type;
        this.weight = weight;
    }

    getPcDescription(amperage, voltage) {
        console.log(`Это ${this.name}, бренда ${this.brand}, тип - ${this.type}, применяется - ${this.functionality} он в данный момент ${this.getState()}, и его потребляемая мощность равна ${this.getWt(amperage, voltage)}w, 
    вес составляет ${this.weight}g`,)
    }

}

class SmartPhones extends ElectricAppliances {
    constructor(name, brand, screen) {
        super();
        this.name = name;
        this.brand = brand;
        this.screen = screen;
    }

    getSmartPhoneDescription() {
        console.log(`Это ${this.name}, бренда ${this.brand}, он сейчас ${this.getState()}, диагональ экрана составляет ${this.screen} дюйма`)
    }
}

const notebook = new Computers('Ноутбук', 'Mac', 'для работы с дизайном проэкта', 'notebook', 5000)
notebook.stateOn()
notebook.getPcDescription(2, 220)

const smartphone = new SmartPhones('Смартфон', 'Xaomi', 6, 2)
smartphone.stateOff()
smartphone.getSmartPhoneDescription()

