const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));


function showProduct(product) {
    console.log(product);


    document.querySelector(".breadcrumb .brand").textContent = product.brandname;
    document.querySelector(".breadcrumb .productname").textContent = product.productdisplayname;
    //img
    document.querySelector("img.productimg").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector("img.productimg").alt = product.productdisplayname;

    document.querySelector(".modelname").textContent = "Model name: " + product.productdisplayname;
    document.querySelector(".brandbio").textContent = product.brandbio;
    document.querySelector(".season").textContent = "Season: " + product.season;
    document.querySelector(".color").textContent = "Color: " + product.basecolour;
    document.querySelector(".sub").textContent = product.subcategory;



    document.querySelector(".price").textContent = product.price + " dkk";
    document.querySelector(".discounted").textContent = "-" + product.discount + "%";

    if (!product, discount) {
        document.querySelector(".discounted").classList.add("hidden")
    }


    const discountamount = product.discount / 100 * product.price;
    const newpricenoround = product.price - discountamount;
    const newprice = Math.round(newpricenoround);
    document.querySelector(".nprice").textContent = `${"New Price: "+ newprice + " dkk"}`;

    if (discountamount) {
        document.querySelector(".nprice").classList.remove("hidden");
    }
    //how hide .discounted when discount equals 0 ?
    if (product.discount) {
        console.log("zero");
        document.querySelector(".discounted").classList.remove("hidden");
    }

    if (product.soldout) {
        copy.querySelector("article").classList.add("soldout");
    }
}