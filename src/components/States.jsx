import React from 'react'

const States = ({item}) => {
    const numOfItem = item.length;
    const packedItem = item.filter((data) => data.packed).length
    const percentage = Math.round((packedItem / numOfItem) * 100);

    if(!item.length){
        return(
            <p className='stats'>
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        )
    }
    
    console.log(numOfItem)
  return (
    <footer className='stats'>
        {
            percentage ===100?
            <em>You got everything! Ready to go ✈️</em>
            :
            <em>You have {numOfItem} items on your list, and you already packed {packedItem} ({percentage}%)</em>
        }
    </footer>
  )
}

export default States