let header = document.getElementById('header')
window.onscroll = function(){
    if(scrollY > 167){
        header.style.backgroundColor = 'white';
    }else{
        header.style.backgroundColor = 'transparent';
    }
}
document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        menu.style.right = 0;
    } else {
        menu.style.display = 'none';
    }
});
/////////////////////////////////////////////////////////////////////////////////////
// const cardData =[
//     {title: 'Travel Agency'  , description: 'First Html, Css project' , link: 'https://ahmedyehia17.github.io/project1/' , imgLink : '../images/TravelAgency.png'}
// ]

// function createCard(data){
//     const card = document.createElement('div')
//     card.classList.add('card')

//     const img=document.createElement('img')
//     img.classList.add('cardImage')
//     img.src = data.imgLink;
//     img.alt = data.title

//     const cardData = document.createElement('div')
//     cardData.classList.add('card-data')

//     const title = document.createElement('h2')
//     title.classList.add('card-title')
//     title.textContent= data.title;

//     const description = document.createElement('p')
//     description.classList.add('card-description')
//     description.textContent = data.description;

//     const projectLink = document.createElement('a')
//     projectLink.classList.add('project-link')
//     projectLink.href = data.link;

//     cardData.append(title);
//     cardData.append(description)
//     cardData.append(projectLink)

//     return card
// }

// const cardContainer = document.getElementById('cards-container')
// cardData.map(data =>{
//     const card = createCard(data);
//     cardContainer.appendChild(card);
// })

