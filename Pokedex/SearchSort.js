import Component from '../Component.js';

class SearchSort extends Component{
    onRender(section){
        
        section.querySelector('#search-submit').addEventListener('click', () => {
            let searchInput = section.querySelector('#search-value').value;
            let searchOption = section.querySelector('#search-option').value;
            if (searchOption === 'name') {
                searchOption = 'pokemon';
            }

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set(searchOption, searchInput);
            searchParams.set('page', 1);
            //searchParams.set('type', searchOption);

            window.location.hash = searchParams.toString();
        });      
    }


    renderHTML(){
        return /*html*/`
        <section id="sort-search">
            <div id="sort-section">
                <label for="sort">Sort</label>
                <select name="sort" id="sort">
                    <option value="name">Name</option>
                    <option value="type">Type (main)</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="speed">Speed</option>
                    <option value="id">ID #</option>
                </select>
            </div>
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