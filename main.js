function doesSomething (id,url) {

const mything= document.querySelector ('#' +id)

mything.src=url


}

doesSomething('image-1','https://media3.giphy.com/media/UMLFm3OcX0b6M/giphy.gif')

doesSomething('image-2', 'https://media0.giphy.com/media/A8UFISckEbokw/giphy.gif' )

doesSomething('image-3','https://media1.tenor.com/images/00796e6163c4e89ef845a1e496a49b45/tenor.gif?itemid=13330018')

function crossOut () {

const firstChildOfList= document.querySelector('#arguments').firstElementChild;
firstChildOfList.style.textDecoration = 'line-through'

}

crossOut ()

function removeLastChild () {

const lastChildofList =document.querySelector('#arguments').lastElementChild;

lastChildofList.remove()
}

removeLastChild ()

removeLastChild ()







