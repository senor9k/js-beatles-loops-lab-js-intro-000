// add solution here
function theBeatlesPlay(musicians, instruments) {

  array = []

  for (i=0; i<=musicians.length; i++){
    sentence = musicians[i] + " plays " + instruments[i]
    array = [...array, sentence]
  }
    
}