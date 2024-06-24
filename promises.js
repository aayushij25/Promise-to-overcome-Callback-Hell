// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random()*10)+1;
//   console.log(data);
//   if(internetSpeed > 4) {
//     // console.log("your data was saved: ", data);
//     success();
//   } else {
//     // console.log("weak connection, data not saved");
//     failure();
//   }
// }

// Callback hell
// saveToDb(
//   "apnacollege", 
//   () => {
//     console.log("success: your data was saved");
//     saveToDb(
//       "hello world", 
//       () => {
//         console.log("success2: data2 saved");
//         saveToDb(
//           "aayushi",
//           () => {
//             console.log("success3: data3 saved");
//           }, 
//           () => {
//             console.log("failure3: weak connection");
//           }
//         )
//       }, 
//       () => {
//         console.log("failure2: weak connection");
//       }
//     )
//   }, 
//   () => {
//     console.log("failure: weak connection, data not saved");
//   }
// );

// Promises - The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise object - resolve (success callback) & reject (failure callback)

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

// let request = saveToDb("apna college"); // req = promise object
// console.log(request);

// states of a promise - pending, rejected, fulfilled (or resolved)

// then() & catch() methods
// after fulfill -> .then()
// after reject -> .catch()

saveToDb("apna college")
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });