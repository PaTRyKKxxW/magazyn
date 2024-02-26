const productname = document.querySelector(`#productname`);
const producthowmuch = document.querySelector(`#howmuch`);
const producttype = document.querySelector(`#producttype`);
const productprice = document.querySelector(`#productprice`);
const previewProductName = document.querySelector("#preview-product-name");
const previewHowMuch = document.querySelector("#preview-how-much");
const previewProductType = document.querySelector("#preview-product-type");
const previewPrice = document.querySelector("#preview-price");
let btn = document.querySelector(`#addBlockButton`);
let previewBlock = document.querySelector(`#preview-Block`);

const updatepreview = (text, element) => {
  element.textContent = text;
};

const preview = () => {
  updatepreview(productname.value, previewProductName);
  updatepreview(producthowmuch.value, previewHowMuch);
  updatepreview(producttype.value, previewProductType);
  updatepreview(productprice.value, previewPrice);
  DownloadValue();
};

let DownloadValue = () => {
  let inputproductname = previewProductName.textContent;
  let inputproducthowmuch = previewHowMuch.textContent;
  let inputproducttype = previewProductType.textContent;
  let inputproductprice = previewPrice.textContent;
  write(
    inputproductname,
    inputproducthowmuch,
    inputproducttype,
    inputproductprice
  );
};

let write = (
  inputproductname,
  inputproducthowmuch,
  inputproducttype,
  inputproductprice
) => {
  console.log("nazwa produktu: " + inputproductname);
  console.log("Ilość produktu: " + inputproducthowmuch);
  console.log("Typ produktu: " + inputproducttype);
  console.log("Cena produktu: " + inputproductprice);
};

let importBlock = (
  inputproducthowmuch,
  inputproductname,
  inputproductprice,
  inputproducttype
) => {
  let data =
    '<section class="previewBlock">' +
    "<p>PREVIEW:</p>" +
    "<span>Product name: <br/>" +
    '<p id="preview-product-name">' +
    inputproductname +
    "</p>" +
    "</span>" +
    "<span>How much: <br />" +
    '<p id="preview-how-much">' +
    inputproducthowmuch +
    "</p>" +
    "</span>" +
    "<span>Price: <br />" +
    '<p id="preview-price">' +
    inputproductprice +
    "</p>" +
    "</span>" +
    "<span>Product type: <br />" +
    '<p id="preview-product-type">' +
    inputproducttype +
    "</p>" +
    "</span>" +
    "</section>";

  previewBlock = previewBlock.innerHTML = data;
};

btn.addEventListener(`click`, importBlock());

productname.addEventListener("input", preview);
producthowmuch.addEventListener("input", preview);
productprice.addEventListener("input", preview);
producttype.addEventListener("input", preview);
