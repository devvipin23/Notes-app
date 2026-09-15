import { Divide,Percent,Delete,Minus,Plus,X,Equal } from "lucide-react";
import { useState, useEffect, useRef } from "react";
function App()
{
  const [input,setInput] = useState("");
  const displayRef = useRef(null);

  function handleclick(value)
  {
    setInput(input + value);
  }

  function clear()
  {
    setInput("");
  }

  function calculate()
  {
    if(input==="") return;
    try
    {
    setInput(String(eval(input)));
    }
    catch
    {
    setInput("Error");
    }
  }

  function deletelast()
  {
    setInput(input.slice(0,-1));
  }

  useEffect(() =>
  {
    function handleKeyDown(event)
    {
      const key = event.key;

      if ("0123456789+-*/.%".includes(key))
      {
        handleclick(key);
      }

      if (key === "Enter")
      {
        calculate();
      }

      if (key === "Backspace")
      {
        deletelast();
      }

      if (key === "Escape")
      {
        clear();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [input]);
  useEffect(() => {
  if (displayRef.current) {
    displayRef.current.scrollTop = displayRef.current.scrollHeight;
  }
}, [input]);

  return(
    <div className='h-screen w-full  flex items-center justify-center'>
    
    <div className='w-full max-w-[400px] min-w-0 h-[560px] shadow-xl bg-slate-100 border-2 border-solid rounded-2xl flex justify-center py-5 bg-amber-50 relative'>
      <h3 className='text-black font-bold font-mono text-[20px] absolute '>Calculator</h3>
      <div ref={displayRef} className="w-[90%] bg-white text-slate-800 shadow-sm border border-slate-200 h-[120px] py-1 px-3 border-2 border-black mt-10 rounded-lg text-5xl text-right overflow-y-auto break-all">
  {input}
</div>
      <div className='w-[90%] h-[340px] bg-gradient-to-br from-violet-100 to-indigo-100 rounded-lg border-2  border-black absolute mt-45 place-items-center grid grid-cols-4 gap-1 py-2 px-4'>
        <button className="key operator rounded-b-full" onClick={clear}>AC</button>
        <button className="key operator" onClick={() => handleclick("%")}><Percent /></button>
        <button className="key operator" onClick={deletelast}><Delete /></button>
        <button className="key operator" onClick={()=> handleclick("/")}><Divide /></button>
        <button className="key" onClick={()=> handleclick("7")}>7</button>
        <button className="key" onClick={()=> handleclick("8")}>8</button>
        <button className="key" onClick={()=> handleclick("9")}>9</button>
        <button className="key operator" onClick={()=> handleclick("*")}><X /></button>
        <button className="key" onClick={()=> handleclick("4")}>4</button>
        <button className="key" onClick={()=> handleclick("5")}>5</button>
        <button className="key" onClick={()=> handleclick("6")}>6</button>
        <button className="key operator" onClick={()=> handleclick("-")}><Minus /></button>
        <button className="key" onClick={()=> handleclick("1")}>1</button>
        <button className="key" onClick={()=> handleclick("2")}>2</button>
        <button className="key" onClick={()=> handleclick("3")}>3</button>
        <button className="key operator" onClick={()=> handleclick("+")}><Plus /></button>
        <button className="key" onClick={()=> handleclick("00")}>00</button>
        <button className="key" onClick={()=> handleclick("0")}>0</button>
        <button className="key" onClick={()=> handleclick(".")}>.</button>
        <button className='key equal bg-amber-400 border-2 border-red-300' onClick={calculate}><Equal /></button>
      </div>
    </div>
  </div>
 );
}
export default App;