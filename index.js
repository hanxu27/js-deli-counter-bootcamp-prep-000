function takeANumber(line, name) {
  line.push(name)
  var i = line.length
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    line.shift
    return (`Currently serving ${line}.`)
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    var i = 0
    while (i++ < line.length) {
      var output =+ [i + 1] + '. ' + line[i]
    }
  }
  return (`The line is currently ${output}`)
}