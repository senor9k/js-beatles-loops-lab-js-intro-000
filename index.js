// add solution here
function theBeatlesPlay(musicians, instruments) {

  let array = []

  for (let i = 0; i < musicians.length; i++){
    let sentence = musicians[i] + " plays " + instruments[i]
    array = [...array, sentence]
  }
return array
}


function johnLennonFacts(facts){
  let array = []
  while (let i < facts.length){
    let sentence = facts[i] + "!!!"
    array = [...array, sentence]
    i++
  }
  return array
}
