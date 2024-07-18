export default function Add(){
    return (
        <section className="add">
            <div className="container text-center">
                <span>What do you need to buy?</span>
                <select name="quantity">
                    {Array.from({length: 20}, (_, i) => i + 1)
                    .map((num) => (<option value={num} key={num}>{num}</option>))}
                </select>
                <input type="text" name="item" />
            </div>
        </section>
    )
}