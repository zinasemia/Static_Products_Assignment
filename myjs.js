const url = "https://kea-alt-del.dk/t7/api/products/2801";
fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));

function showProduct(product) {
    console.log(product);
    document.querySelector(".breadcrumb .brand").textContent= product.brandname;
    document.querySelector(".breadcrumb .productname").textContent= product.productdisplayname;
    //img
    document.querySelector("img.productimg").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector("img.productimg").alt = product.productdisplayname;
}