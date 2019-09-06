document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault()
  console.log(event);

  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(animalListItem);

  event.target.reset();
  }

const createAnimalListItem = function(form) {
  const newAnimal = document.createElement('li');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  newAnimal.appendChild(name);

  const species = document.createElement('h3');
  species.textContent = form.species.value;
  newAnimal.appendChild(species);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  newAnimal.append(category);

  return newAnimal;

  }

  const handleDeleteAllClick = function (event) {
    const animalList = document.querySelector('#animal-list');
    animalList.innerHTML = '';
  }
