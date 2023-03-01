var arr = [];
var A = [];

function add() {
    let x = document.getElementById("FD").value;
    arr.push(x);
    A.push(x);

    display(A);

}

function display(itemArray) {
    document.getElementById("list").innerHTML = null;

    for (let i in itemArray) {

        y = document.createElement('li');
        console.log(itemArray[i])
        y.textContent = itemArray[i];

        document.getElementById("list").appendChild(y)
    }
}


function sort() {
    if (document.getElementById("disp").value == "sort") {

        arr.sort();
        display(arr);
    } else {
        display(A);
    }
}