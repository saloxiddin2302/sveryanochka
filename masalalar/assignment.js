'use strict';
// 1 masala
class Triangle {
    #leftSide
    #rightSide
    #width

    getLeftSide(){
        return this.#leftSide
    }

    getRightSide(){
        return this.#rightSide
    }

    getWidth() {
        return this.#width
    }

    setSides(a, b, c){
        this.#leftSide = a
        this.#rightSide = b
        this.#width = c
    }
}

// 2 masala
class Employee {
    #id
    #firstName
    #lastName
    #salary

    getId(){
        return this.#id
    }
    getFirstName(){
        return this.#firstName
    }
    getLastName(){
        return this.#lastName
    }
    getSalary(){
        return this.#salary
    }
    setId(id){
        return this.#id = id
    }
    setFirstName(fName){
        return this.#firstName = fName
    }
    setLastName(lName){
        return this.#lastName = lName
    }
    setSalary(s){
        return this.#salary = s
    }

    getFullName(){
        return this.#firstName + ' ' + this.#lastName
    }
    getAnnualSalary(){
        return this.#salary * 12
    } // salary * 12
    raiseSalary(percent){
        return this.#salary *= (1 + percent / 100);
    }

}

//3 masala
class CustomDate{
    #day
    #month
    #year

    getDay(){
        return this.#day
    }
    getMonth(){
        return this.#month
    }
    getYear(){
        return this.#year
    }
    setDay(d){
        return this.#day = d
    }
    setMonth(m){
        return this.#month = m
    }
    setYear(y){
        return this.#year = y
    }

    getISOdate(){
        const date = new Date("12-05-2023");
        return date.toISOString()
    } // 12-05-2023

}
//4 masala
class Time {
    #hour
    #minute
    #second

    getHour(){
        return this.#hour
    }
    getMinute(){
        return this.#minute
    }
    getSecond(){
        return this.#second
    }
    setHour(h){
        this.#hour = h 
    }
    setMinute(m){
        this.#minute = m
    }
    setSecond(s){
        this.#second = s
    }

    nextSecond(){
        return `${this.#hour}:${this.#minute}:${++second}`
    } //06:20:10 -> 06:20:11
    previousSecond(){
        return `${this.#hour}:${this.#minute}:${--second}`
    } //06:20:10 -> 06:20:09
}
//5 masala
class Shape {
    #color = ""
    #filled = true
    getColor(){
        return this.#color
    }
    setColor(c){
        this.#color = c
    }
    isFilled(){
        return this.#filled
    }
    setFilled(f){
        this.#filled = f
    }
}

class Circle extends Shape{
    #radius

    getRadius(){
        return this.#radius
    }
    setRadius(r){
        this.#radius = r
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, 2) 
    }

    getPerimeter(){
        return 2* Math.PI * this.#radius
    }
}

class Rectangle extends Shape {
    #width
    #height

    getWidth(){
        return this.#width
    }
    setWidth(w){
        this.#width = w
    }
    getHeight(){
        return this.#height
    }
    setHeight(h){
        this.#height = h
    }

    getArea(){
        return this.#height * this.#width
    }
    getPerimeter(){
        return (this.#height + this.#width) * 2
    }
}

// Masala 6
class Person{
    #name
    #address

    getName(){
        return this.#name
    }
    setName(n){
        this.#name = n
    }
    getAddress(){
        return this.#address
    }
    setAddress(a){
        this.#address = a
    }
}

class Student extends Person{
    #faculty
    #year
    #university

    getFaculty(){
        return this.#faculty
    }
    getYear(){
        return this.#year
    }
    getUniversity(){
        return this.#university
    }
    setFaculty(f){
        this.#faculty = f
    }
    setYear(y){
        this.#year = y
    }
    setUniversity(u){
        this.#university = u
    }
}

class Employee extends Person{
    #salary
    #work

    getSalary(){
        return this.#salary
    }
    getWork(){
        return this.#work
    }
    setSalary(s){
        this.#salary = s
    }
    setWork(w){
        this.#work = w
    }
}


//Masala 7
class Animal {
    #name
    #speed
    #weight
}

class Mammal extends Animal {
    #legs
    
    getLegs(){
        return this.#legs
    }
    setLegs(l){
        this.#legs = l
    }
}

class Cat extends Mammal {
    getSound(){
        return "Meow"
    }
}

class Dog extends Mammal {
    getSound(){
        return "Woof"
    }
}

class Fish extends Animal {
    #size

    getSize(){
        return this.#size
    }
    setSize(s){
        this.#size = s
    }
}

class Whale extends Fish {
    getSound(){
        return "Poof"
    }
}

class Shark extends Fish {
    getSound(){
        return "Sheef"
    }
}

// Masala 8, 9 savolga tushunmadim
class Object{
    static customKeys(){
        
    }
    static customValues(){

    }
    static customEntries(){

    }
}

class Number{
    static customIsInteger(){

    }
}

class Array{
    static customIsArray(){
        
    }
}



//Masala 10
class Person {
    constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount){
        this.housePrice = housePrice;
        this.housesNumber = housesNumber;
        this.carPrice = carPrice;
        this.carsNumber = carsNumber;
        this.bankAccount = bankAccount;
    }

    getWealth(){
        return this.housePrice + this.carPrice + this.bankAccount;
    }
}

class RichPerson extends Person {
    constructor(companyPrice, companiesNumber, investigation){
        this.companyPrice = companyPrice
        this.companiesNumber = companiesNumber
        this.investigation = investigation
    }

    getWealth(){
        return super.getWealth() + this.companyPrice
    }
}