const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

document.querySelector("h2").textContent = brandname;

const url = "https://kea-alt-del.dk/t7/api/products/?brandname=" + brandname;



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
    copy.querySelector(".price").textContent = `${"Price: "+product.price+" dkk"}`;
    copy.querySelector(".discounted").textContent = `${"-"+product.discount + "%"}`;
    copy.querySelector("img.productimg").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("img.productimg").alt = product.productdisplayname;
    console.log(product);

    //discount price
    const discountamount = product.discount / 100 * product.price;
    const newpricenoround = product.price - discountamount;
    const newprice = Math.round(newpricenoround);
    copy.querySelector(".nprice").textContent = `${"New Price: "+ newprice+" dkk"}`;
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