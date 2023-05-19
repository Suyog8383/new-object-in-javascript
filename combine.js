const people[
  {name:"john",age:21},
  {name:"max",age:20},
  {name:"Alexa",age:20}
];
const groupBy=(arr)=>{
let result={};
  for(let i=0;i<people.length;i++){
    if(obj.hasOwnProperty(people[i])){
      result[people[i].age].push(people[i])
    }else{
       result[people[i].age]=[people[i]]
    }
  }
  return result;
};
console.log(groupBy(people))
