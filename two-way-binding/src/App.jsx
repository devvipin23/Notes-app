import { useState } from "react";

const App =()=>
{
  const [text,newText] = useState('')

    const submitHandler=(elem)=>
    {
      elem.preventDefault()     // It use to prevent reload
      console.log("Form Submited by",text);
      newText('')
      
    }
    return(
      <div>
        <form onSubmit={(elem)=>
        {
          submitHandler(elem)
        }
        }>
      <input type="text" placeholder="Enter your name" value={text}
      onChange={(elem)=>
        {
          newText(elem.target.value);
          
        }
      }
      />
      <button>Submit</button>
      </form>
      </div>
  )
}
export default App