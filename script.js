function Car (cName, cBrand, cYear){
    this.name = cName
    this.brand = cBrand
    this.year = cYear
}
function Person (pName, pAge){
    this.name = pName
    this.age = pAge
    this.Carowner = function(car){
        document.write(' ' + 'has' + ' ' + car.name + ' ' + car.brand + ' ' + car.year)
    }
    this.displayInfo = function () {
        document.write (this.name + ' ' + 'is' + ' ' + this.age + ' ' + 'years old.')
    }
}
var Bill = new Person ('Bill', 24)
Bill.displayInfo()
var Toyota = new Car ('Toyota', 'Rav4', 2020)
Bill.Carowner(Toyota)