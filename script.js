let pets = [
  { name: "Garfield", type: "cat", age: 3, adopted: false },
  { name: "Gar", type: "dog", age: 1, adopted: false },
  { name: "Field", type: "bird", age: 2, adopted: false },
  { name: "Fifi", type: "cat", age: 1, adopted: false },
];

function displayPet(pet) {
  let cssClass = pet.adopted ? "pet adopted" : "pet available";
  let statusText = pet.adopted ? "Adopted" : "Available for Adoption";

  let html = `<div class="${cssClass}">Pet name is ${pet.name} ${pet.type} ${pet.age} ${pet.adopted}</div>`;

  return html;
}

function showAllPets() {
  let container = document.getElementById("pet-list");

  pets.forEach((pet) => {
    container.innerHTML += displayPet(pet);
  });
}

showAllPets();

function adoptPet(petName) {
    for()

  
  
}
