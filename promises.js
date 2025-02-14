/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1() {
    return 1;
}

async function num2() {
    return 2;
}



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function waiting() {
    const value = await num2();
    console.log(value);
}

//waiting()

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("done!!!");
        }, 1500);
    });

    const result = await promise;

    console.log("my promise is", result);
}

// waitForMyPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("done!!!");
//     }, 1500);
// }).then(value => console.log("then my other promise is", value));


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function str(sec) {

    await wait(sec);
    console.log("Strings are nice!");

    return;
}

//str(2000);


/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = random => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve("sucess!!!");
    } else {
        reject("random error");
    }
});

// for (let i = 0; i < 10; i++) {
//     const random = Math.random();
//     wait(2000 + (random * 1000))
//         .then(() => tryRandomPromise(random))
//         .then(value => console.log("random try @", i, value))
//         .catch(error => console.log("random try @", i, error));
// }

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async (i) => {
    const random = Math.random();

    await wait(3000 + random * 1000);

    try {
        const result = await tryRandomPromise(random);
        console.log("random again #", i, result);
    } catch (err) {
        console.error("random again #", i, err);
    }
}

for (let i = 0; i < 10; i++) {
    tryTryAgain(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF PROGRAM');
