import { useState } from "react";

const Paginav = ({ ver, siguiente, onVer, onSiguiente }) => {

  const cambio = () => {
    onVer();
  };

  const cambiosiguiente = () => {
    onSiguiente();
  };

  return (
    <nav className="container mx-auto m-2">
      <ul className="flex justify-center gap-3 items-center">
        {ver ? (
          <li>
            <button
              className="border-2 p-2 rounded-lg hover:bg-[#97ce4c] transition"
              onClick={cambio}
            >
              Anterior
            </button>
          </li>
        ) : null}
        {siguiente ? (
          <li>
            <button
              className="border-2 p-2 rounded-lg hover:bg-[#97ce4c] transition"
              onClick={cambiosiguiente}
            >
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Paginav;
