import { useState } from "react"
export function NewTodosForm(props){
const [newItem, setNewItem] = useState("")
function handleSubmit(e){
e.preventDefault()
if(newItem === "") return
props.onSubmit(newItem)
setNewItem("")
}
return(
<form onSubmit={handleSubmit} className='new-itemform'>
<div className='for-row'>
    <div className="flex items-center justify-center" ><h1>JUST DO IT!!!</h1></div>
    
<label htmlFor="item">Tambah Kegiatan : </label>
<input type="text" value={newItem}
onChange={e => setNewItem(e.target.value)}
id="item" />
</div>
<button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" className="btn">
  Add
</button>
</form>
)
}
