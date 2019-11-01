import Component from '../Component.js';

class Paging extends Component {
    onRender() {
        const pageBack = document.getElementById('back');
        const pageForward = document.getElementById('forward');
    }

    renderHTML() {
        return /*html*/`
        <main>
            <nav id="page-nav">
                <button id="back">◀</button>
                <button id="forward">▶</button>
            </nav>
        </main>
        `;
    }
}

export default Paging;