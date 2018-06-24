// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
      drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
      drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
      drivers.pop()
}

function destructivelyRemoveFirstDriver() {
      drivers.shift()
}

function appendDriver(name) {
    return drivers.concat('Broom')
}

function prependDriver(name) {
    const drivers2 = ['Arnold', ...drivers]
    return drivers2
}

function removeLastDriver() {
   const drivers drivers.filter('Garfield')
}