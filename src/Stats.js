export default function Stats({ list }){
    const totalItems = list.length
    const packedItems = list.filter((list) => list.inCart).length
    const percentage = Math.round(packedItems / list.length * 100)

    return (
        <section className="stats">
            <div className="container text-center">
                {
                    //! refactor needed (but it's working wonderfully)
                    //probably a comment will be useful in the future:
                    // the first line evaluates if the list is empty
                    // OR if the list is not empty, and it gives you how many items/item you have
                    // if it's only one, it will give just the info about if you found it or not
                    // if there's more, it will give
                    // line 22: if you found everything
                    // line 23: if you have found some of the items
                    //line 24: if you have to start checking the items 
                    (totalItems === 0 && <p>Add something to your list to see your stats!</p>)
                    || (totalItems > 0 && <p>You have {totalItems} {totalItems === 1 ? "item" : "items"} in your list
                    {totalItems === 1 ? " and" + (list[0].inCart ? " you have it!" : " it's still hiding somewhere..." )
                    : ((packedItems === totalItems && " and you found everything!") || 
                    (packedItems > 0 && ` and you have already found ${packedItems} (${percentage}%)`) ||
                    (packedItems === 0 && `: remember to bring this list with you!`))}</p>)
                }
            </div>
        </section>
    )
}