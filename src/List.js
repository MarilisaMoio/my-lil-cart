import ListItem from "./ListItem"

export default function List({ list, onDeleteItem }){

    return (
        <section className="list">
            <div className="container">
                {list.length > 0 && 
                <ul>
                    {list.map((el) => <ListItem item={el} onDeleteItem={onDeleteItem} key={el.id}></ListItem>)}
                </ul>}
                {list.length === 0 && <span>There's no items in your cart!</span>}
            </div>
        </section>
    )
}