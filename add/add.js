const productname = document.querySelector(`#productname`);
const producthowmuch = document.querySelector(`#howmuch`);
const producttype = document.querySelector(`#producttype`);
const previewProductName = document.querySelector("#preview-product-name");
const previewHowMuch = document.querySelector("#preview-how-much");
const previewProductType = document.querySelector("#preview-product-type");

const updatepreview = (text, element) => {
  element.textContent = text;
};

const preview = () => {
  updatepreview(productname.value, previewProductName);
  updatepreview(producthowmuch.value, previewHowMuch);
  updatepreview(producttype.value, previewProductType);
};

productname.addEventListener("input", preview);
producthowmuch.addEventListener("input", preview);
producttype.addEventListener("input", preview);
