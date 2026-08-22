function loginUser(username, callback) {
    setTimeout(() => {
        console.log("1. User logged in");
        callback();
    }, 1000);
}

function getProducts(callback) {
    setTimeout(() => {
        console.log("2. Products loaded");
        callback();
    }, 1000);
}

function addToCart(callback) {
    setTimeout(() => {
        console.log("3. Product added to cart");
        callback();
    }, 1000);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("4. Payment completed");
        callback();
    }, 1000);
}

function createOrder(callback) {
    setTimeout(() => {
        console.log("5. Order created");
        callback();
    }, 1000);
}

function sendConfirmation(callback) {
    setTimeout(() => {
        console.log("6. Confirmation email sent");
        callback();
    }, 1000);
}


// CALLBACK HELL
loginUser("Fathima", function () {

    getProducts(function () {

        addToCart(function () {

            makePayment(function () {

                createOrder(function () {

                    sendConfirmation(function () {

                        console.log("7. Process completed!");

                    });

                });

            });

        });

    });

});