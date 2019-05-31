var characters = [
  'Juan Nieve',
  'Daniela',
  'Toñio'
]
characters[3] = 'Jaime el mocho'

characters.push('Cecilia')
characters.unshift('El Rrope')
characters.reverse()
characters.pop()
characters.shift()
var danny = characters.indexOf('Daniela')
characters.splice(danny, 1)
var addCharacter = function(char){
  var index = characters.indexOf(char)
  if( index === -1){
    characters.push(char)
  } 
}
addCharacter('Toñio')
characters.sort()

var printCharacters = function(){
  var wrapper = document.getElementById('wrapper')
  characters.map(function(element){
    var parragraph = document.createElement('p')
    parragraph.innerText = element
    wrapper.appendChild(parragraph)
  })
}

characters.forEach( function(e){ console.log(e) })

console.log(characters)
console.log(characters.toString())
console.log(characters.join('-'))

var moreNumbers = [1,2,3,4,5,5,5]

var cincos = moreNumbers.filter(function(num){
  return num === 3
})[0]

console.log(cincos)