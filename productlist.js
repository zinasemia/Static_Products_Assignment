const url = "https://kea-alt-del.dk/t7/api/products/";
// fetch(url)
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (data) {
//         handleProductList(data);
//     });

// function handleProductList(data) {
//     console.log(data);
//     data.forEach(showProduct);
// }

fetch(url)
    .then((res) => res.json())
    .then((data) => loop(data));





function loop(data) {
    data.forEach(showProduct)
}

function showProduct(product) {
    console.log(product);
    //grab the template
    const template = document.querySelector("#smallProductTemplate").content;
    //clone it
    const copy = template.cloneNode(true);
    copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
    //change content
    copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
    copy.querySelector("h4").textContent = `${product.productdisplayname}`;
    copy.querySelector(".price").textContent = `${"Price: "+product.price}`;
    copy.querySelector(".discounted").textContent = `${"-"+product.discount + "%"}`;

    console.log(product);

    //discount price
    const discountamount = product.discount / 100 * product.price;
    const newpricenoround = product.price - discountamount;
    const newprice = Math.round(newpricenoround);
    copy.querySelector(".nprice").textContent = `${"New Price: "+ newprice}`;
    //grab parent
    const parent = document.querySelector("main");
    if (discountamount) {
        copy.querySelector(".nprice").classList.remove("hidden");

    }

    if (product.discount) {
        copy.querySelector(".discounted").classList.remove("hidden");
    }
    if (product.soldout) {
        copy.querySelector("article").classList.add("soldout");
    }
    //adapt
    parent.appendChild(copy);
}
/* <div class="product">
                <article class="smallProduct">


                    <div class="text">
                        <img src="css/images/indianshirt.webp" alt="Tshirt">
                        <li>
                            <h4>Blue T20 Indian Cricket Jersey</h4>
                        </li>
                        <li>
                            <p>Tshirts | Nike<p>
                        </li>
                        <li>
                            <p>DKK 1595,-</p>
                        </li>
                        <li><a href="product.html"> Read more</a>
                        </li>
                    </div>*/