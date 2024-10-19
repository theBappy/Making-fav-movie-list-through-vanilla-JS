let movies =[
  {
    title: 'Parasite',
    img: 'parasite.jpg',
    rating: 5,
  },
  {
    title: 'Burning',
    img: 'burning.png',
    rating: 4.8,
  },
  {
    title: 'Inception',
    img: 'inception.jpg',
    rating: 5,
  }
];

let movieTable = document.createElement('table')
let movieTableHead = document.createElement('thead')
let movieTableHeadRow = document.createElement('tr')
let movieTableHeaderHeading1 = document.createElement('th')
let movieTableHeaderHeading2 = document.createElement('th')
let movieTableHeaderHeading3 = document.createElement('th')
let movieTableHeaderHeading4 = document.createElement('th')

movieTableHeaderHeading1.innerHTML = 'Image'
movieTableHeaderHeading2.innerHTML= 'Title'
movieTableHeaderHeading3.innerHTML = 'Rating'
movieTableHeaderHeading4.innerHTML = ''

movieTable.setAttribute('class', 'table table-striped')

movieTableHead.appendChild(movieTableHeadRow)

movieTableHeadRow.appendChild(movieTableHeaderHeading1)
movieTableHeadRow.appendChild(movieTableHeaderHeading2)
movieTableHeadRow.appendChild(movieTableHeaderHeading3)
movieTableHeadRow.appendChild(movieTableHeaderHeading4)

movieTable.appendChild(movieTableHead)

document.getElementById('table').appendChild(movieTable)

function createMovieCellelementsAndAttachEvents(row, title, img, rating){
    let imgCell= document.createElement('td')
    let titleCell = document.createElement('td')
    let ratingCell = document.createElement('td')
    let deleteCell = document.createElement('td')
    let imageElement = document.createElement('img')

    let deleteButton = document.createElement('button')
    deleteButton.innerText ='X'
    deleteButton.classList.add('btn')
    deleteButton.classList.add('btn-sm')
    deleteButton.classList.add('btn-danger')
    addDeleteEvent(deleteButton)
    deleteCell.classList.add('align-middle')

    setCellContent(
        titleCell,
        imgCell,
        ratingCell,
        imageElement,
        title,
        img,
        rating
    );
    addImageCellEvents(imgCell)
    row.appendChild(imgCell)
    row.appendChild(titleCell)
    row.appendChild(ratingCell)
    row.appendChild(deleteCell)
}

function setCellContent(
    titleCell,
    imageCell,
    ratingCell,
    imageE1,
    title,
    image,
    rating
) {
    imageE1.src = image
    imageE1.alt = 'image not found'
    imageE1.width = 70
    imageE1.classList.add('img-thumbnail')

    titleCell.classList.add('align-middle')

    ratingCell.setAttribute('class', 'align-middle')
    titleCell.innerHTML = title

    let ratingSpanThumbsUp = document.createElement('span')
    ratingSpanThumbsUp.classList.add('fa')
    ratingSpanThumbsUp.classList.add('fa-thumbs-up')
    ratingSpanThumbsUp.style.padding = '10px'

    let ratingSpanThumbsUpDown = document.createElement('span')
    ratingSpanThumbsUpDown.classList.add('fa')
    ratingSpanThumbsUpDown.classList.add('fa-thumbs-down')

    let ratingSpanNumber = document.createElement('span')
    ratingSpanNumber.style.cssText = 'font-size: 20px'
    ratingSpanNumber.innerHTML = rating
    ratingSpanNumber.style.padding = '10px'

    increaseRating(ratingSpanThumbsUp)
    decreaseRating(ratingSpanThumbsUpDown)
    ratingCell.appendChild(ratingSpanThumbsUp)
    ratingCell.appendChild(ratingSpanThumbsUpDown)
    ratingCell.appendChild(ratingSpanNumber)

    imageCell.appendChild(imageE1)
}

function hideShowElement(el){
    if(el.style.display === 'none'){
        el.style.display = 'block'
    }
    else{
        el.style.display = 'none'
    }
}

document.getElementById('new-movie')
.addEventListener('click', function(){
    let el = document.getElementById('new-movie-form')
    hideShowElement(el)
})

function addImageCellEvents(imgCell){
    imgCell.addEventListener('mouseover', function(){
        imgCell.childNodes[0].width = 90
    })
    imgCell.addEventListener('mouseout', function(){
        imgCell.childNodes[0].width = 70
    })
}

function addDeleteEvent(button){
    button.addEventListener('click', function(event){
        console.log(event.target.parentNode.parentNode)
        movieTable.removeChild(event.target.parentNode.parentNode)
    })
}

function increaseRating(ratingSpanThumbsUp){
    ratingSpanThumbsUp.addEventListener('click', function(event){
        let numberRating = ratingSpanThumbsUp.nextSibling.nextSibling
        let newRating = Number(numberRating.innerHTML) + 1
        numberRating.innerHTML = newRating
    })
}

function decreaseRating(ratingSpanThumbsUpDown){
    ratingSpanThumbsUpDown.addEventListener('click', function(){
      let numberRating = ratingSpanThumbsUpDown.nextSibling
      let newRating = Number(numberRating.innerHTML) -1
      numberRating.innerHTML = newRating
})
}


let body = document.createElement('tbody')
movieTable.appendChild(body)
movies.forEach(function(movie){
    let row = document.createElement('tr')
    createMovieCellelementsAndAttachEvents(row, movie.title, movie.img, movie.rating)
    body.appendChild(row)
})

function addMovie(movieform){
    event.preventDefault();
     console.log('event: ' + event.target);
     console.log('form: ' + movieform[1].innerHTML);
     console.log(document.forms.movieform[0].value);

     //OR
     console.log(movieform[0])

      let imgsrc = movieform[0].value
      let title = movieform[1].value
      let rating = movieform[2].value

      if(
        imgsrc =='' || title == '' || rating == ''
      ){
        document.getElementById('status').innerHTML = 'OOPS! Please fill in all the fields.'
      }
      else{
        document.getElementById('status').innerHTML = ''
        let row = document.createElement('tr')
        createMovieCellelementsAndAttachEvents(row, movieform[0].value, movieform[1].value, movieform[2].value)

        movieTable.insertBefore(row, movieTable.childNodes[0])

        movieform[0].value =''
        movieform[1].value =''
        movieform[2].value=''

        hideShowElement(document.getElementById('new-movie-form'))
      }
 }

 console.log('movie table: ' + movieTable.rows[1].childNodes[2].innerHTML)

 console.log('container: ' + document.getElementsByClassName('container')[0].childNodes)

 const table  = document.getElementsByTagName('table')[0]
 console.log('Table is grandparent node:  ' + table.parentNode.parentNode)
 console.log('Table parent node: ' + table.parentNode)
 console.log('Taabel child nodes: ' + table.childNodes)
 console.log('Number of child nodes: ' + table.childNodes.length)
 console.log('Tabls first child : ' + table.firstChild.nodeName)
 console.log('Table last child: ' + table.lastChild.nodeName)
 console.log('Table next sibling : ' + table.nextSibling)
 console.log('Table previous sibling: ' + table.previousSibling)
 table.childNodes.forEach(function(node){
    console.log(node)
 })


