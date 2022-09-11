const user = { id: 11, name: 'Gorib', job: 'web developer' }
const strngfied = JSON.stringify(user);
const converted = JSON.parse(strngfied);
console.log(strngfied);
console.log(converted);