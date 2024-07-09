const productsDiv = document.getElementById('containerProducts');
// console.log(productsDiv);

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        getData(json);
    });


//get all products
function getData(arr) {
    var products = arr;
    console.log(products);

    products.forEach((element, index) => {
        console.log(element);
        productsDiv.innerHTML +=
            `
                <div class="item">
                    <img <img src="${products[index].image}" alt="">
                    <h2>${products[index].category}</h2>
                    <div class="price">${products[index].price} EGP</div>
                    <div class="icon">
                        <i class="heart fa-solid  fa-heart"></i>
                        <i class="car fa-solid  fa-cart-shopping"></i>
                    </div>
                </div>
            `
    });
}



