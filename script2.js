class Circle{
    constructor(radius = 1.0,color = "red"){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        console.log(`radius : ${this.radius1}`);
    }
    setRadius(radius){
        this.radius1 = radius;
    }
    setColor(color){
        this.color1 = color;
    }
    getColor(){
        console.log(`color : ${this.color}`); 
    }
    toString(){
        return `Circle[radius = ${this.radius1} , color = ${this.color}]`
    }
    getArea(){
        return(Math.PI)*this.radius*this.radius1;
    }
    getCircumference(){
        return 2*Math.PI*this.radius;
    }

}
var cir = new Circle();
console.log(cir);

var cir1 = new Circle(2.0);
console.log(cir1);

var cir2 = new Circle(3.0,"blue");
console.log(cir2);


cir2.setRadius(5.0);

cir2.getRadius();


cir2.setColor("orange");

cir2.getColor();


var str = cir2.toString();
console.log(str);

console.log(cir2.getArea());

console.log(cir2.getCircumference());




