
const header = () => {
    return`
    <header class="header">
        <h1>Best Beers</h1>
        <button class='material-icons'>menu</button>
    </header>
    `

}

const cardComponent = () => {

    
}


function loadEvent(){
    document.getElementById('root').insertAdjacentHTML('beforeend', header())   




}
window.addEventListener("load", loadEvent)