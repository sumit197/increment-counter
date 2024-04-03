const counters = document.querySelectorAll(".counter"); //here we have targeted to all counter class where data-target is stored
counters.forEach((counter) => { //with foreach we can perform operation in all div at ones
  //console.log(counter);
  counter.innerHTML = 0; //here we have put  initial no. to 0

  //now we have to make a function which will increment no. 0 to data-target value

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target"); //here we have target the value of data target attribute by using getAttribute
    console.log(typeof targetCount); //here we can see all value we got are in string . we ahve to convert it into number
    const startingCount = Number(counter.innerHTML); //Number method and + in line 7 used to convert string into number
    const incr = targetCount / 100; //now here we set with how much no. it increases at a time

    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + incr)}`; //here number will increment only once
      setTimeout(updateCounter, 100); //now number will increase according to given time
    }else{
        counter.innerHTML=targetCount;
    }
  };
  updateCounter();
});
