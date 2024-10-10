import React from "react";

const page = () => {
  return (
    <div className="pt-28 px-6 lg:px-12">
      <h1 className="mb-4 font-bold text-2xl ">Kontakt</h1>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <input
            type="text"
            placeholder="Imię"
            className="border-[1px] p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Nazwisko"
            className="border-[1px] p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-[1px] p-2 rounded-md"
          />
        </div>
        <textarea
          placeholder="Treść wiadomości..."
          rows={5}
          className="border-[1px] p-2 rounded-md resize-none"></textarea>
        <button className="border-[1px] py-2 mt-2 font-bold hover:bg-cyan-500 hover:text-white rounded-md">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default page;
