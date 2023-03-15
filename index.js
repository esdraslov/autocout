exports.stater = function(id, times) {
  const doct = document.getElementById(id)
  for(let i = 0; i < times; i++){
    doct++
  }
}