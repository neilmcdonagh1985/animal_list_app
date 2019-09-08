document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const createAnimalListItem = function() {
  const newAnimal = document.createElement('li');

  const name = document.createElement('h2')
  name.textContent = `Animal: ${event.target.name.value}`;
  newAnimal.appendChild(name);

  const species = document.createElement('h3')
  species.textContent = `Species: ${event.target.species.value}`;
  newAnimal.appendChild(species);

  const continent = document.createElement('p')
  continent.textContent = `Continent: ${event.target.continent.value}`;
  newAnimal.appendChild(continent);

  return newAnimal;
}

const handleNewItemFormSubmit = () => {
  event.preventDefault()
  console.log(event);

  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(animalListItem);

  event.target.reset();


}
const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}
