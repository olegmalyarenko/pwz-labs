const task1 = `<!DOCTYPE html>
<html>
<body>

<button id="myBtn">JavaScript Event Handler</button>

<p id="demo"></p>

<a href="https://developer.mozilla.org">Посилання</a>

<script>
let p1 = 5;
let p2 = 7;
document.getElementById("myBtn").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("demo").innerHTML = a * b;
}
</script>

</body>
</html>`;

export default task1;