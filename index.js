// add solution here
 function theBeatlesPlay (musicians, instruments){
  var sentence = []
  for (let i = 0;i < musicians.length;i++){
    for(let  j = 0; j < instruments.length;j++){
      if(i === j){
        sentence.push(musicians[i]+" plays "+instruments[j])
      }
    }
  }
     
    
  return sentence
  console.log(sentence)
}


/*1. Create a function `theBeatlesPlay`, which accepts two parameters--an array of
   musicians and an array of instruments. 

    * Create a variable with an empty array.
    * Use a `for loop`, which iterates over the array of musicians. Be careful
      about what value you set your `counter` variable to store. (Hint: Think about what the first index of an array is). 
    * The first time through the loop, it should create a string using the _first_ 
    index of the musicians array **and** the first index of the instruments
      array: `"John Lennon plays guitar"`. 
    * Add this string to the empty array you created. The loop should make the same sentence for every member of the musicians array. 
    * The function should return the array of new strings containing what
      instruments each musician plays.*/