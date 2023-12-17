// Q2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    
    set CircleRadius(radius){
        this.radius = radius;
    }
    get CircleRadius(){
       return this.radius
    }

    set CircleColor(color){
        this.color = color;
    }
    get CircleColor(){
       return this.color
    }
    
    get toString(){
        return `"circle[Radius = ${this.radius} , Color = ${this.color}]"`
    }
    get Area(){
        return `Area of the circle is :${Math.PI * this.radius * this.radius};`
    }
    get circumference(){
        return `Circumference of the circle is :${2 * Math.PI * this.radius}`
    }
   
}
let value = new Circle (1.0,"red");

console.log(value.CircleRadius);
value.CircleRadius= 5.1
console.log(value.CircleRadius);

console.log(value.CircleColor);
value.CircleColor= "green"
console.log(value.CircleColor);

console.log(value.toString);

console.log(value.Area);

console.log(value.circumference);