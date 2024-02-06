function result(){
    let login = document.getElementById("login").value;
    let pass = document.getElementById("pass").value;
    if (login === "admin" && pass === "1324"){
        alert("logged in as admin");
        location.href = "../admin/indexadmin.html";
    }else{
        alert("try again");
    }
}