import Component from '../Component.js';

class Header extends Component{
    renderHTML(){
        return /*html*/`
            <header>
                <div id="title-logo">
                    <img id="logo" src="./assets/pokeball3.png" alt="">
                    <span>Pokédex</span>
                </div>
                <nav>
                    <a href="">Link 1</a>
                    <a href="">Link 2</a>
                </nav>
            </header>
        `;
    }
}

export default Header;