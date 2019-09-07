document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = () => {
  event.preventDefault()
  console.log(event);

  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(animalListItem);


  event.target.reset();
}

const createAnimalListItem = function(form) {
  const newAnimal = document.createElement('li');

  const name = document.createElement('h2')
  name.textContent = `Animal: ${form.name.value}`;
  newAnimal.appendChild(name);

  const species = document.createElement('h3')
  species.textContent = `Species: ${form.species.value}`;
  newAnimal.appendChild(species);

  const continent = document.createElement('p')
  continent.textContent = `Continent: ${form.continent.value}`;
  newAnimal.appendChild(continent);

  return newAnimal;
}

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}
