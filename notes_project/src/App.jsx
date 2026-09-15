import { X } from "lucide-react";
import { useState } from "react";

const App = () =>
{
  const [notes,setNotes]=useState('')
  const [notesDetail,setNotesDetail]=useState('')
  const [task,setTask]=useState([])
  const submitHandler = (e) =>
  {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({notes,notesDetail})
    setTask(copyTask)
    

    setNotes('')
    setNotesDetail('')
    
  }
  const deletenote =(idx)=>
  {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return(
    <div className='h-screen lg:flex bg-white'>
      <form onSubmit={(e)=>
        {
          submitHandler(e)
        }
      } className='flex flex-col lg:w-1/2 gap-4 py-5 px-10'>
        <h1 className='text-xl font-bold'>Add Notes</h1>

        <input value={notes} onChange={(e)=>
        {
          
          setNotes(e.target.value);
          
        }
        } className='border 1 w-full border-black text-black py-2 px-5 w-1/2 outline-none rounded text-lg' type="text" placeholder="Enter Notes Heading"/>
        <textarea value={notesDetail} onChange={(e)=>
          {
            setNotesDetail(e.target.value)
            
          }
        }
        className='border 1 w-full h-30 border-black text-black py-2 px-5 w-1/2 outline-none rounded text-lg' placeholder="Enter Notes Details"/>
        <button className='border 1 w-full bg-black border-white text-white py-5 px-10 w-1/2 rounded text-lg'>Add Notes</button>

      </form>
      <div className='lg:border-l-2 ml-5 lg:border-t-0 border-t-2 lg:w-1/2 lg:h-screen py-5 px-20 lg:p-10 flex-col flex'>
      <h1 className='font-bold text-2xl'>Your Notes</h1>
      <div className='flex flex-wrap flex-1 gap-5 mt-5 h-screen scrollbar-none overflow-auto'>
        {task.map(function(elem,idx)
        {
          return  <div key={idx} className="w-45 h-50  relative rounded-xl  border-2 p-5 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/009/796/197/small/notebook-paper-background-lined-paper-sheet-of-lined-page-notebook-paper-texture-vector.jpg')]">
            <h2 className='absolute top-1 right-1 p-1 rounded bg-red-600 cursor-pointer transition-transform duration-100 active:scale-95'
            onClick={()=>
            {
              deletenote(idx)
            }
        
            }
            >
              <X size={16} color="white" />
              </h2>
            <h3 className='leading-tight font-bold text-xl'>{elem.notes}</h3>
            <p className='leading-tight mt-2 font-medium text-gray-500'>{elem.notesDetail}</p>
          </div>


        })}
      </div>
      </div>
    </div>
  )
}
export default App