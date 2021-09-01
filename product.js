const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));

function loop(data) {
    data.forEach(showProduct)
}

function showProduct(product) {
    console.log(product);

    const template = document.querySelector("#producttemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".breadcrumb .brand").textContent = product.brandname;
    copy.querySelector(".breadcrumb .productname").textContent = product.productdisplayname;
    //img
    copy.querySelector("img.productimg").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("img.productimg").alt = product.productdisplayname;
    copy.querySelector("h3").alt = product.productdisplayname;




    const parent = document.querySelector(".specialmain");
    parent.appendChild(copy);



}