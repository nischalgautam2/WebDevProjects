const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Tour order is ready. Come and get it!');
        } else {
            reject( Error('Your order cannot be made.') );
        }
    }, 3000);
});
breakfastPromise.then( val => console.log(val) ).catch( err => console.log(err) );