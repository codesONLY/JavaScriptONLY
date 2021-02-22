function triangleType(a,b,c){
    if(((a < 180 && a > 0) || (b < 180 && b > 0) || (c < 180 && c > 0)) && (a+b+c === 180)){
      if(a === b && b === c && a === c){
        return "Equilateral"
      }
      else if((a===b && b !==c && c !== a) || (a!==b && b !==c && c === a) || (a!==b && b ===c && c !== a)){
        return "Isosceles"
      }
      else{
        return "Scalene"
      }
    }
    return "Not a Triangle"
  }
  
  const triangle = triangleType(140,20,20)
  console.log(triangle)