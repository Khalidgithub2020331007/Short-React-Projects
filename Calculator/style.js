function deleteme() {
  document.getElementById('myresult').value = '';
}

function calculator(newvalue) {
  document.getElementById('myresult').value += newvalue;
}

function answer() {
  let expr = document.getElementById('myresult').value;
  try {
    let b = eval(expr);
    document.getElementById('myresult').value = b;
  } catch (e) {
    alert("Invalid expression!");
  }
}
