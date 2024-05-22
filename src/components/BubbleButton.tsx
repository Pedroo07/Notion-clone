import { ComponentProps, ReactNode } from 'react'

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

const BubbleButton = (props: BubbleButtonProps) => {
  return (
    <button className='p-2 text-zinc-800 text-base flex items-center gap-1.5 font-medium data-[active=true]:text-violet-400' {...props}>
    </button>
  )
}

export default BubbleButton