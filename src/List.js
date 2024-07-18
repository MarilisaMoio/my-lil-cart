import { useState } from "react";
import ListItem from "./ListItem"

export default function List({ list, onDeleteItem, onToggleItem, onClearList }){
    const [sort, setSort] = useState('input');

    let sortedList = getSorted(sort)

    function getSorted(sort){
        switch (sort) {
            case "input":
                return list
            case "inCart":
                return list.slice().sort((a,b) => Number(a.inCart) - Number(b.inCart) )
            case "name":
                return list.slice().sort((a,b) => a.name.localeCompare(b.name) )
            default:
                return list
        }
    }

    return (
        <section className="list">
            <div className="container">
                {list.length > 0 && 
                <ul>
                    {sortedList.map((el) => <ListItem item={el} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={el.id}></ListItem>)}
                </ul>}
                {list.length === 0 && <p className="text-center">There's no items in your cart!</p>}
                <div className="actions">
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value='input'>Sort by input</option>
                        <option value="inCart">Sort by found</option>
                        <option value="name">Sort by name</option>
                    </select>
                    <button onClick={() => onClearList([])}>Clear List</button>
                </div>
            </div>
            
        </section>
    )
}