import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import './listgrid.css';



function ListGrid() {

const listViewButton = document.querySelector('.list-view-button');
const gridViewButton = document.querySelector('.grid-view-button');
const list = document.querySelector('ol');

listViewButton.onclick = function () {
  list.classList.remove('grid-view-filter');
  list.classList.add('list-view-filter');
}

gridViewButton.onclick = function () {
  list.classList.remove('list-view-filter');
  list.classList.add('grid-view-filter');
}
    return (
        <div className='list-grid-div'>
            <div class="filter-buttons">
                <div class="list-view-button"> <FontAwesomeIcon icon={faList}/> List view</div>
                <div class="grid-view-button"><FontAwesomeIcon icon={faTh}/> Grid view</div>
            </div>

            <ol class="list list-view-filter">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
                <li>List item 5</li>
                <li>List item 6</li>
            </ol>
        </div>
    )
}

export default ListGrid
