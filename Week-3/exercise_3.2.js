const obj = {
  fname: 'Naveen',
  lname: 'Mohanty',
}

const funcObj = {
  print(type) {
    return `name:${this.fname} ${this.lname}, type:${type}`
  }
}

let bindPrint = funcObj.print.bind(obj) // can pass print args like (obj,'bind')

console.log(bindPrint('Bind'))

console.log(funcObj.print.call(obj,'call'))

console.log(funcObj.print.apply(obj,['apply']))