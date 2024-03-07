const a1 = ['1','2','3']
const a2 = ['1','2','3']
// const a3 = a1.concat(a2, [7, 8, 9, 'Luiz'])

const a3 = [...a1,'luiz',...a2, ...[7,8,9]  ]
console.log(a3)