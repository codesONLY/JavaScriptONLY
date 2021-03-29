function calculateHexagonArea(l){
    return (3*Math.sqrt(3)/2)*Math.pow(l,2);
  }
  
  const area = calculateHexagonArea(3);
  console.log(area)