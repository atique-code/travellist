import { useState } from "react"
import Logo from "./components/Logo"
import PackageList from "./components/PackageList"
import Forms from "./components/form"
import States from "./components/States";

function App() {
  const [items, setItems] = useState([]);

  function addItems(i){
    // console.log(i)
    setItems((prev)=> [...prev , i])
    console.log(items) 
    
  }

  function handleDelete(id){
    setItems((items)=> items.filter((item)=> item.id !== id))
    
  }

  function handleUpdate(id){
    setItems((items) => items.map((item)=> item.id === id ? {...item, packed: !item.packed} : item))
  }
  
  function handleClear(){
    let confirmation = window.confirm("Do you want to delete all the things? ")

    if(confirmation){
      setItems([])
    }
   


  }
  
  console.log(items)
  return (
    <div className="app">
      <Logo/>

      <Forms onAddItems= {addItems}/>

      <PackageList item={items} 
      onDeleteItem ={handleDelete}
       onToggleItem={handleUpdate} 
       onClearAll={handleClear}
       />

      <States item={items}/>
    </div>
  )
}



export default App
