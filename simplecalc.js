// Cong hai so, hien thi ket qua xuong duoi
function Add(event){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = "<h3>Ket qua phep tinh la " + (a+b) + "</h3>";
    event.preventDefault();
}

// Tru hai so
function Subtract(event){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = "<h3>Ket qua phep tinh la " + (a-b) + "</h3>";
    event.preventDefault();
}

// Nhan hai so
function Multiply(event){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = "<h3>Ket qua phep tinh la " + (a*b) + "</h3>";
    event.preventDefault();
}

// Chia hai so
function Divide(event){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = "<h3>Ket qua phep tinh la " + (a/b) + "</h3>";
    event.preventDefault();
}
