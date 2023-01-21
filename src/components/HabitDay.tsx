import "./Habit.css";
import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import dayjs from "dayjs";
import { HabitsList } from "./HabitsList";
import { useState } from "react";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function HabitDay({
  defaultCompleted = 0,
  amount = 0,
  date,
}: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const percentualCompleted =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");

  const dayOfWeek = dayjs(date).format("dddd");

  function handleCompletedChanged(completed: number) {
    setCompleted(completed);
  }
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10  bháorder-zinc-800 rounded-lg transition-colors",
          {
            "bg-rose-500 border-rose-300": percentualCompleted >= 80,
            "bg-rose-600 border-rose-400":
              percentualCompleted >= 60 && percentualCompleted < 80,
            "bg-rose-700 border-rose-500":
              percentualCompleted >= 40 && percentualCompleted < 60,
            "bg-rose-800 border-rose-600":
              percentualCompleted >= 20 && percentualCompleted < 40,
            "bg-rose-900 border-rose-700":
              percentualCompleted > 0 && percentualCompleted < 20,
            "bg-zinc-900 border-zinc-800": percentualCompleted === 0,
          }
        )}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
          <span className="font-semibold text-zinc-400"> {dayOfWeek} </span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>
          <ProgressBar progress={percentualCompleted} />
          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
