export default function Stats({ list }){
    const totalItems = list.length
    const packedItems = list.filter((list) => list.inCart).length
    const percentage = packedItems / list.length * 100

    return (
        <section className="stats">
            <div className="container text-center">
                {
                    //! refactor needed (but it's working wonderfully)
                    (totalItems === 0 && <p>Add something to your list to see your stats!</p>)
                    || (totalItems > 0 && <p>You have {totalItems} {totalItems === 1 ? "item" : "items"} in your list
                    {totalItems === 1 ? " and" + (list[0].inCart ? " you have it!" : " it's still hiding somewhere..." )
                    : ((packedItems === totalItems && " and you found everything!") || 
                    (packedItems > 0 && ` you have already found ${packedItems} (${percentage}%)`) ||
                    (packedItems === 0 && `: remember to bring this list with you!`))}</p>)
                }
            </div>
        </section>
    )
}