let btn = document.querySelector(`#btn`);

let result = () => {
  let login = document.getElementById("login").value;
  let pass = document.getElementById("pass").value;
  if (login === "admin" && pass === "1324") {
    window.location.href = "../admin/indexadmin.html";
    alert("logged in as admin");
  } else {
    alert("try again");
  }
};
btn.addEventListener(`click`, result);
