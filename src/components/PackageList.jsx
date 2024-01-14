import React, { useState } from 'react'
import Item from './items'

const PackageList = ({ item, onDeleteItem, onClearAll, onToggleItem }) => {

    const [sortBy, setSortBy] = useState("input")
    
    // console.log("package list: ", item)
    let sortItem;
    if(sortBy === "input") sortItem = item;

    if(sortBy === "description") {
        sortItem = item .slice().sort((a,b) => a.description.localeCompare(b.description))
    }

    if(sortBy === "packed") {
        sortItem = item.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
    }

    
    return (
        <div className='list'>
            <ul>
                {sortItem.map((item, index) => {
                    return (
                        <>

                            <Item
                                item={item}
                                onDeleteItem={onDeleteItem}
                                onToggleItem={onToggleItem}
                            />
                        </>
                    )
                })}
            </ul>
            <select className="actions"value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">sort by input order</option>
                <option value="description">sort by decription</option>
                <option value="packed">sort by packed status</option>
            </select>
            <button onClick={onClearAll} >Clear</button>
        </div>
    )
}

export default PackageList
