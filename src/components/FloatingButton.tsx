import { ComponentProps, ReactNode } from 'react'

 interface FloatingButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}
 export const FloatingButton = (props: FloatingButtonProps) => {
    return (
        <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600' {...props}>
            
        </button>
    )
}
interface FloatingImgProps  {
    src: string
}
export const FloatingImg = ({src }: FloatingImgProps) => {
    return (
        <img src={src} alt="text" className='w-12 border border-zinc-600 rounded' />
    )
}