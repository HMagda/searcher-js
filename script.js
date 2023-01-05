const matches = document.querySelectorAll('div.drink-list > ul > li');
console.log('matches', matches);

function searchForInputValue() {
  let search_value = document.querySelector('.search').value;
  console.log(search_value);

  matches.forEach((val) => {
    if (val.innerHTML.toLowerCase().includes(search_value.toLowerCase())) {
      val.style.display = 'block';
    } else {
      val.style.display = 'none';
    }
  });
}
