import ListItem from "./ListItem"

export default function List({ list, onDeleteItem, onToggleItem }){

    return (
        <section className="list">
            <div className="container">
                {list.length > 0 && 
                <ul>
                    {list.map((el) => <ListItem item={el} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={el.id}></ListItem>)}
                </ul>}
                {list.length === 0 && <p className="text-center">There's no items in your cart!</p>}
            </div>
        </section>
    )
}