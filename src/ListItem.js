export default function ListItem({ item, onDeleteItem, onToggleItem }){
    return (
        <li> 
            <input type="checkbox" name="inCart" value={item.inCart} onChange={() => onToggleItem(item.id)}/>
            <span>{item.quantity} {item.name}</span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    )
}