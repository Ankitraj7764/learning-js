
// const a=5;

// console.log("hiiiii");

// module.exports=a;


// import a from 'math'
// console.log(a);

// class A{
//     constructor(a,b){
//         this.a=a;
//         this.b=b
//     }
    
//     ab(){
//       console.log("hiii");
//       return "hrllo"
      
//     }
// }
// const b=new A();
// console.log(b.ab());


// const obj={
//     a:5,
//     data:function(a){
//         console.log(this.a);
        
//     }
// }
// const a=10;

// obj.data.call(a)



// let a={c:"hello"};

// let b={name:"ankit"}

// a["b"]={
//     lastn:"raj"
// }
// console.log(a);;

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());


