import Component from '../Component.js';

class SearchSort extends Component{
    onRender(section){
        
        section.querySelector('#search-submit').addEventListener('click', () => {
            let searchOption = section.querySelector('#search-option').value;
            if (searchOption === 'name') {
                searchOption = 'pokemon';
            }

            let searchInput = section.querySelector('#search-value').value;
            // if (searchInput < 0 || searchInput % 1 !== 0){
            //     searchInput = Number(searchInput);
            //     searchInput = Math.abs(searchInput.toFixed());
            //     alert('Your number was changed to a positive whole number');
            // }

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set(searchOption, searchInput);
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });

        section.querySelector('#sort').addEventListener('change', () => {
            const queryString = window.location.hash.slice(1);
            const sortParams = new URLSearchParams(queryString);

            sortParams.set('sort', section.querySelector('#sort').value);

            window.location.hash = sortParams.toString();
        });

        section.querySelector('#sort-direction').addEventListener('change', () => {
            const queryString = window.location.hash.slice(1);
            const sortDirection = new URLSearchParams(queryString);

            sortDirection.set('direction', section.querySelector('#sort-direction').value);

            window.location.hash = sortDirection;
        });

        section.querySelector('#clear').addEventListener('click', () => {
            window.location.hash = '';
        });
    }


    renderHTML(){
        return /*html*/`
        <section id="sort-search">
            <div id="sort-section">
                <label for="sort">Sort</label>
                <select name="sort" id="sort">
                    <option value="pokemon">Name</option>
                    <option value="type_1">Type (main)</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="speed">Speed</option>
                    <option value="id">ID #</option>
                </select>
                <label for="sort-direction">Sort Direction</label>
                <select name="sort-direction" id="sort-direction">
                    <option val="asc">Ascending</option>
                    <option val="desc">Descending</option>
                </select>
            </div>
            <button id="clear">Clear</button>
            <div id="search-section">
                <select name="search" id="search-option">
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                    <option value="attack">Attack (min)</option>
                    <option value="defense">Defense (min)</option>
                    <option value="speed">Speed (min)</option>
                    <option value="id">ID # (range)</option>
                    <input name="search" type="text" id="search-value">
                    <button id="search-submit">Search</button>
            </div>
        </section>
        `;
    }
}

export default SearchSort;