import Component from '../Component.js';

class SearchSort extends Component{
    onRender(){

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
                    <label for="search">Search</label>
            </div>
        </section>
        `;
    }
}

export default SearchSort;