const formEl = document.getElementById('madlib-form');

formEl.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formEl);

    console.log(formData.get('input-1'));
    const spanEls = document.querySelectorAll('.input-value');

    spanEls.forEach(span => {
        span.innerHTML = formData.get(span.dataset.input);
    });
});


document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("result").style.visibility = "visible";
  document.getElementById("title").style.display = "none";
  document.getElementById("first").style.display = "none";

}

document.getElementById("again").addEventListener("click", myFunction1);

function myFunction1() {
  window.location.reload();

}
