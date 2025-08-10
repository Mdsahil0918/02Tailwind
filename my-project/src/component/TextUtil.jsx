import { useState, useCallback, useEffect, useRef } from "react";

let TextUtil = () => {
  const passRef = useRef(null);
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const copyFromClipBoard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, number, char]);
  useEffect(() => {
    passwordGen();
  }, [length, number, char, passwordGen]);

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-6 my-10 bg-gray-800 text-orange-400">
      {/* Password Display Box */}
      <div className="flex shadow-md rounded-lg overflow-hidden mb-5">
        <input
          type="text"
          value={password}
          placeholder="Generated password"
          readOnly
          className="flex-grow px-3 py-2 bg-gray-900 text-white outline-none"
          ref={passRef}
        />
        <button
          onClick={copyFromClipBoard}
          className="bg-orange-500 shadow-9 hover:bg-orange-600 text-white px-4 py-2 transition-all"
        >
          Copy
        </button>
      </div>

      {/* Options */}
      <div className="space-y-4 text-sm">
        {/* Length */}
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer accent-orange-500"
          />
          <label className="font-medium">Length: {length}</label>
        </div>

        {/* Include Numbers */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
            className="w-4 h-4 accent-orange-500"
          />
          <span>Include Numbers</span>
        </div>

        {/* Include Special Characters */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={char}
            onChange={() => setChar((prev) => !prev)}
            className="w-4 h-4 accent-orange-500"
          />
          <span>Include Special Characters</span>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={passwordGen}
        className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all"
      >
        Generate Password
      </button>
    </div>
  );
};
export default TextUtil;
