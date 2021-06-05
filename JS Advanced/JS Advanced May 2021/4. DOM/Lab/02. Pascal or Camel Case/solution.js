function solve() {
  let text = document.getElementById("text").value;
  let namingConvetion = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  let newTextArr = text.toLowerCase().split(' ');

  if (namingConvetion === "Camel Case") {
    result.textContent = newTextArr.map((w, i) => {
      if (i != 0) {
        w = w[0].toUpperCase() + w.substr(1);
      }
      return w;
    }).join('');
  } else if (namingConvetion === "Pascal Case") {
    result.textContent = newTextArr.map(w => w[0].toUpperCase() + w.substr(1)).join('');
  } else {
    result.textContent = 'Error!';
  }
}