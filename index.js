function takeANumber(line, name) {
  line.push(name)
  var i = line.length
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return ("there is nobody waiting to be served")
  } else {
    return (line[0])
  }
  
}