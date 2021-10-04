// const urlParams = new URLSearchParams(window.location.search);
// const season = urlParams.get("season");
// const brandname = urlParams.get("brandname");
// const url = "https://kea-alt-del.dk/t7/api/products/" + season;
// const url = "https://kea-alt-del.dk/t7/api/products/" + brandname;

// const url = "https://kea-alt-del.dk/t7/api/products/";

// fetch(url)
//     .then((res) => res.json())
//     .then((data) => showProduct(data));


// document.querySelector("a.brandname").setAttribute("href", "productlist.html?brandname=" + product.brandname);


fetch("https://kea-alt-del.dk/t7/api/brands")
    .then((res) => res.json())
    .then(getData);

function getData(data) {

    data.forEach(showBrand)
}

function showBrand(brand) {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("a").textContent = brand.brandname;
    copy.querySelector("a").href = `productlist.html?brandname=${brand.brandname}`;
    const parent = document.querySelector(".brand ol");
   parent.appendChild(copy);
}
