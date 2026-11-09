// setInterval(() => {
//     console.log("hello world");
//     console.log("Hello");
// }, 1000);

// setTimeout(() => {
//     console.log("Hello world");
//     console.log("Hello ");
// }, 3000);

//async_await_promise example
// const product = fetch(' https://fakestoreapi.com/products')
//     .then(respone => respone.json())
//     .then(data => { console.log(data); })

// setTimeout(() => { console.log("Hello world"); }, 2000);

async function fetchProducts() {
    const respone = await fetch('https://fakestoreapi.com/products');
    const data = await respone.json();
    console.log(data);
    console.log("hello");

}
fetchProducts();




