const willTanosKillMe = (name, Kills, Safe) => {
    if(name.length%2 === 0){
      Kills();
    }else{
      Safe()
    }
  }
  
  willTanosKillMe("SohamS", () => console.log("DedXD"), () => console.log("Safe"));