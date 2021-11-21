document.addEventListener('DOMContentLoaded', () => {
    const  newGame = document.querySelector('#New-Game');
    newGame.addEventListener('submit', newGameSubmit);
  
    const deleteButton = document.createElement('Button');
    deleteButton.textContent = "Delete all";
    const form = document.querySelector("form");
    form.appendChild(deleteButton);
    deleteButton.addEventListener('click', handleDeleteClick)
    
    
});


const newGameSubmit = function (event){
    // console.log(event.target)
    event.preventDefault();
    const newGame = createGameListItem(event.target);
    const gamesList = document.querySelector("#Games-List");
    gamesList.appendChild(newGame);
    event.target.reset();
};

const createGameListItem = function(form){
    const newGame = document.createElement('li')
    // console.log(form)

    const Title = document.createElement('h2');
    // console.log(form.Title.value)
    Title.textContent = form.Title.value;
    newGame.appendChild(Title);

    const platform = document.createElement('h3');
    platform.textContent = form.platform.value;
    newGame.appendChild(platform);

    const releaseDate = document.createElement('h3');
    console.log(form.released.value)
    releaseDate.textContent = form.released.value;
    newGame.appendChild(releaseDate)

    return newGame;
    
};
const handleDeleteClick = function(event){
    const gameList = document.querySelector('#Games-List');
    gameList.innerHTML='';
}