function takeANumber(line, name) {
  line.push(name)
  var i = line.length
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    clone = 
    return (`Currently serving ${line[0]}.`)
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    while (i++ < line.length) {
      output =+ [i + 1] + '. ' + line[i]
    }
  }
  return (`The line is currently ${output}`)
}