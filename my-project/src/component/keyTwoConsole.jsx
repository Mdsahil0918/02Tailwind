import { useRef, useEffect } from 'react';

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log('Pressed:', e.key);
    };

    const div = divRef.current;
    div.focus(); // Make the div focusable to receive key events
    div.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when component unmounts
    return () => {
      div.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={divRef}
      tabIndex={0} // Make the div focusable
      className="w-full h-screen outline-none flex items-center justify-center text-xl font-semibold"
    >
      Press any key inside this area
    </div>
  );
};

export default App;
