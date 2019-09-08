document.addEventListener('DOMContentLoaded', () =>{
  const form = document.querySelector('#new-item-form');

  const deleteAll = function () {
    const animalList = document.querySelector('#animal-list');
    animalList.innerHTML = '';
  }

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', deleteAll);

  form.addEventListener('submit', function() {
    event.preventDefault()
    console.log(event);

    const newList = document.querySelector('#animal-list');

      const newListItem = document.createElement('li');

      const name = document.createElement('h2');
      name.textContent = `Animal Name: ${event.target.name.value}`;
      newListItem.appendChild(name);

      const species = document.createElement('h3');
      species.textContent = `Species: ${event.target.species.value}`;
      newListItem.appendChild(species);

      const continent = document.createElement('p');
      continent.textContent = `Continent: ${event.target.continent.value}`;
      newListItem.appendChild(continent);

      newList.appendChild(newListItem);
      event.target.reset();

      return newListItem;    
  })

})