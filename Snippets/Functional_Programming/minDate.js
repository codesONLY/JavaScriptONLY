function minDate(date1,date2){
    let date1Transform = new Date(date1);
    let date2Transform = new Date(date2);
    
    return (date1Transform > date2Transform)?date2:date1
  }
  
  minDate('02/05/2021', '24/01/2021')