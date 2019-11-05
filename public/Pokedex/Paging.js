import Component from '../Component.js';

class Paging extends Component {
    onRender(el) {
        const count = this.props.count;
        const page = this.props.page;
        const perPage = this.props.perPage;

        const pageBack = el.querySelector('#back');
        pageBack.classList = '';
        const pageForward = el.querySelector('#forward');
        pageForward.classList = '';

        let queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        //disable buttons if out of range
        if (searchParams.get('page') < 2) {
            pageBack.classList.add('disableMe');
        }
        if (searchParams.get('page') >=
        Math.ceil(count / perPage)) {
            pageForward.classList.add('disableMe');
        }

        //display page x of y
        const displayOf = el.querySelector('p');
        displayOf.textContent = `Page ${page} of ${Math.ceil(count / perPage)}`;

        //write to hash
        el.querySelector('#back').addEventListener('click', () => {
            searchParams.set('page', Number(page) - 1);
            window.location.hash = searchParams.toString();
        });

        el.querySelector('#forward').addEventListener('click', () => {
            searchParams.set('page', Number(page) + 1);
            window.location.hash = searchParams.toString();
        });

    }

    renderHTML() {
        return /*html*/`
        
            <nav id="page-nav">
                <p></p>
                <button id="back">◀</button>
                <button id="forward">▶</button>
            </nav>
        
        `;
    }
}

export default Paging;