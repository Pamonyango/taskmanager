

const doWorkPromise = new promises((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 4, 1]);
    },5000
});

doWorkPromise.then((result) => {
    console.log('Success!, result');
}).catch((error) => {
    console.log('Error!,error');
});
