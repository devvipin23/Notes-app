import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function increase() {
    setnum(num + 1);
  }

  function decrease() {
    setnum(num - 1);
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">

      <video
        src="/ai.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      ></video>

      <div className="relative z-10 h-full flex flex-col items-center justify-center">

        <h1>{num}</h1>

        <div className='gap-10'>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </div>

      </div>

    </div>
  );
};

export default App;