import logo from "./logo.svg";

function App() {
  return null;
}

export default App;

// 콜백을 이용해서 비동기
// function inNumber(number, callback) {
//   //해야할 것
//   setTimeout(() => {
//     const test = number + 1;
//     callback(test);
//   }, 1000);
// }

// inNumber(7, (result) => {
//   console.log(result);
//   inNumber(result, (result) => {
//     console.log(result);
//     inNumber(result, (result) => {
//       console.log(result);
//     });
//   });
// });
// 콜백으로 비동기를 처리하려면 계속 코드를 확장시켜야함. 가독성이 매우 떨어짐.
// 콜백 지옥을 벗어나기 위한 프라미스 객체

function innumber(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 1;
      if (result > 10) {
        return reject(0);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

// innumber(7)
//   .then((num) => {
//     console.log(num);
//     return innumber(num);
//   })
//   .then((num) => {
//     console.log(num);
//     return innumber(num);
//   })
//   .then((num) => {
//     console.log(num);
//     return innumber(num);
//   })
//   .then((num) => {
//     console.log(num);
//     return innumber(num);
//   });

async function runNumber() {
  try {
    let result = await innumber(7);
    console.log(result);
    result = await innumber(result);
    console.log(result);
    result = await innumber(result);
    console.log(result);
    result = await innumber(result);
    console.log(result);
    result = await innumber(result);
    console.log(result);
    result = await innumber(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

runNumber();
