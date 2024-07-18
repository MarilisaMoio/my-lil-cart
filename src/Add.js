import { useState } from "react"

export default function Add({ onAddItem }){
    const [quantity, setQuantity] = useState(1);
    const [itemName, setItemName] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        if(!itemName) return;

        const newItem = { name: itemName, quantity, inCart: false, id: Date.now() }

        setQuantity(1);
        setItemName("");

        onAddItem(newItem)

    }
    
    return (
        <section className="add">
            <div className="container text-center">
                <span>What do you need to buy?</span>
                <form onSubmit={handleSubmit} >
                    <select name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {Array.from({length: 20}, (_, i) => i + 1)
                        .map((num) => (<option value={num} key={num}>{num}</option>))}
                    </select>
                    <input type="text" name="item" placeholder="I need..." value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    <button>Add</button>
                </form>
            </div>
        </section>
    )
}