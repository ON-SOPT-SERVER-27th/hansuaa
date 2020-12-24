// 과제 3
const members = require('./member');

function getFemale(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const Female = members.filter(m => m.gender === '여')
      resolve(Female);
    }, 500)
  })
}

function getYB(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
        const YB = members.filter(m => m.status === 'YB')
        resolve(YB);
    }, 500)
  })
}

function getiOS(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const iOS = members.filter(m => m.part === 'iOS')
      resolve(iOS);
    }, 500)
  })
}

getFemale(members)
  .then(members => getYB(members))
  .then(members => getiOS(members))
  .then(members => console.log(members))


/*
getFemale(member) 
  .then((member) => { console.log(members);  return members; })
  .then((members) => getYB(members))
  .then((members) => { console.log(members); return members; })
  .then((members) => getiOS(members))
  .then((members) => console.log(members));
*/