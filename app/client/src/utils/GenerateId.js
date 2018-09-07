export function * genId () {
  let x = 0
  while (true) {
    yield x++
  }
}
