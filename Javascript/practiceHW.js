//area of cirle
// BMI calculation
//

let PI= 3.14
let r = 5

let area = PI*r**2;
console.log(area);

let weight = 85
let height = 1.82

let BMI = weight/height**2;

if(BMI<18.5){
    console.log("Underweight");
    
}else if(BMI>=18.5 && BMI<=24.9){
console.log("Healthy");

}else if(BMI>=25.0 && BMI<=29.0){
console.log("Overweight");

}else{
    console.log("Obesity");
}




