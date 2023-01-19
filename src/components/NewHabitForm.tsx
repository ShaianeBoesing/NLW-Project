import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Hábito
      </label>
      <input type="text" id="title" className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400" placeholder="ex.: Berber 2L de água"/>

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Recorrência
      </label>

      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-800 hover:bg-green-700">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}