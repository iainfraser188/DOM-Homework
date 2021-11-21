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
    newGame.classList.add('gameListItem')
    // console.log(form)

    const Title = document.createElement('h2');
    // console.log(form.Title.value)
    Title.textContent = form.Title.value;
    newGame.appendChild(Title);

    const platform = document.createElement('h3');
    platform.textContent = form.platform.value;
    newGame.appendChild(platform);

    const releaseDate = document.createElement('h3');
    // console.log(form.released.value)
    releaseDate.textContent = form.released.value;
    newGame.appendChild(releaseDate);

    const deleteSingle = document.createElement('Button')
    deleteSingle.textContent = "Delete Item"
    newGame.appendChild(deleteSingle);
    deleteSingle.addEventListener('click',handleSingleDeleteClick)

    return newGame;
    
};
const handleDeleteClick = function(event){
    const gameList = document.querySelector('#Games-List');
    gameList.innerHTML='';
}
const handleSingleDeleteClick = function(event){
    console.log()
    const gameItem = document.querySelector('.gameListItem');
    gameItem.removeChild('#Games-List');
}
