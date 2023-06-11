import React from "react";
import "./globals.css";

function dare() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-7 font-semibold text-white">NSFW DARE 😛</h1>
      <div className="border-2 md:h-3/6 md:w-3/6 h-3/6 w-3/4 mb-5 flex items-center justify-center bg-pink-300 text-white text-xl rounded">
        output
      </div>
      <button className="bg-white hover:bg-pink-400 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow">
        New Dare!
      </button>
    </div>
  );
}

export default dare;
