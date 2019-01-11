// add solution here
function theBeatlesPlay(musicians, instruments) {

  let array = []

  for (let i=0; i<=musicians.length; i++){
    sentence = musicians[i] + " plays " + instruments[i]
    array = [...array, sentence]
  }
return array
}
