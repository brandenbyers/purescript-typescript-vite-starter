import {
  add,
  concatStrings,
  isEven,
  logApple,
  logCupcake,
  logPizza,
  logSpaghetti,
  multiply,
  toUpperCase,
} from './pure'

const main = (): void => {
  console.log('working')
  logSpaghetti()
  logPizza()
  logCupcake()
  logApple()
  console.log('Add 5 and 3:', add(5)(3))
  console.log('Multiply 4 and 7:', multiply(4)(7))
  console.log('Concatenate strings:', concatStrings('Hello ')('World'))
  console.log('Uppercase:', toUpperCase('hello'))
  console.log('Is 4 even?:', isEven(4))
  console.log('Is 5 even?:', isEven(5))
}

main()
