const App = () =>
{
  function click(vll)
  {
    console.log(vll);
    
  }
  
  return(
    <div>
     {/* <input type="text" placeholder="Enter the text"
     onChange={(elem)=>
     {
      console.log(elem.target.value);
     }
     }
     /> */}
      <input type="text" placeholder="Enter text" onChange={function clickk(elem)
        {
          console.log(elem.target.value);
          
        }
      }/>
    </div>
  )
}
export default App