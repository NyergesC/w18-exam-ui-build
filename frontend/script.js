
const header = () => {
    return`
    <header class="header">
        <h1>Best Beers</h1>
        <button class='material-icons'>menu</button>
    </header>
    `

}

const cardComponent = ({title, sub, text}) => {
  /*  const cardArr = beers.cards */   
    return  `
        <div class="wrapper">
            <div id="numberContainer">
                <p id="id">1</p>
            </div>
            <h1>${title}</h1>
            <h2>${sub}</h2>
            <h3>${text}</h3>
            <button>details<i class="material-icons">arrow_forward</i></button>

        </div>

    `
 
}


function loadEvent(){
    document.getElementById('root').insertAdjacentHTML('beforeend', header())
    
    const cardArr = beers.cards

    document.getElementById('container').insertAdjacentHTML('beforeend', cardArr.map(beer => cardComponent(beer)))   




}
window.addEventListener("load", loadEvent)