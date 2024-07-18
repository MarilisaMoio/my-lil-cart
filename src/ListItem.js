export default function ListItem({ item, onDeleteItem }){
    return (
        <li> 
            <input type="checkbox" name="inCart" />
            <span>{item.quantity} {item.name}</span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    )
}