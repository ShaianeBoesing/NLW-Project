import './Habit.css'
import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'
import clsx from 'clsx'

interface HabitDayProps {
  completed: number,
  amount: number
}

export function HabitDay({completed, amount}: HabitDayProps) {
  const percentualCompleted = Math.round((completed / amount) * 100)
  return (
    <Popover.Root>
      <Popover.Trigger 
        className={clsx("w-10 h-10  bháorder-zinc-800 rounded-lg", {
          'bg-rose-500 border-rose-300': percentualCompleted >= 80,
          'bg-rose-600 border-rose-400': percentualCompleted >= 60 && percentualCompleted < 80,
          'bg-rose-700 border-rose-500': percentualCompleted >= 40 && percentualCompleted < 60,
          'bg-rose-800 border-rose-600': percentualCompleted >= 20 && percentualCompleted < 40,
          'bg-rose-900 border-rose-700': percentualCompleted >= 20 && percentualCompleted < 40,
          'bg-zinc-900 border-zinc-800': percentualCompleted === 0,
        })}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <Popover.Arrow className='fill-zinc-900' height={8} width={16}/>
          <span className='font-semibold text-zinc-400'> Quarta-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'> 18-01</span>
          <ProgressBar progress={percentualCompleted} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}