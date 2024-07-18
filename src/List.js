import { useState } from "react"
import ListItem from "./ListItem"

export default function List(){
    let testList = [
        {
            id: 1,
            quantity: 1,
            name: "frutta",
            inCart: false
        },
        {
            id: 2,
            quantity: 1,
            name: "Pasta barilla",
            inCart: false
        },
        {
            id: 3,
            quantity: 1,
            name: "Pera",
            inCart: false
        },
    ]

    const [list, setList] = useState(testList);

    return (
        <section className="list">
            <div className="container">
                {list.length > 0 && 
                <ul>
                    {list.map((el) => <ListItem item={el} key={el.id}></ListItem>)}
                </ul>}
                {testList.length === 0 && <span>There's no items in your cart!</span>}
            </div>
        </section>
    )
}