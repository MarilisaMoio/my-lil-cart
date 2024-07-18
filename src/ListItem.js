export default function ListItem({ item }){
    return (
        <li> 
            <input type="checkbox" name="inCart" />
            <span>{item.quantity} {item.name}</span>
            <button>❌</button>
        </li>
    )
}