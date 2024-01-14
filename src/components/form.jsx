import React, { useState } from 'react'

const Forms = ({onAddItems}) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(description)
        if (!description) return;

        let objItems = {quantity, description, package: false, id: Date.now()}
        console.log(objItems);

        onAddItems(objItems);

        setDescription("");
        setQuantity(1)
    }
    
  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
    </div>
  )
}

export default Forms
