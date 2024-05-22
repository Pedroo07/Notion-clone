import { EditorContent, useEditor, BubbleMenu, FloatingMenu } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import StarterKit from "@tiptap/starter-kit"
import { common, createLowlight } from 'lowlight'
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode } from 'react-icons/rx'
const lowlight = createLowlight(common)
import ts from 'highlight.js/lib/languages/typescript'
import { initialContent } from './InitialContent'

import 'highlight.js/styles/monokai.css'
import BubbleButton from './BubbleButton'
import { FloatingButton, FloatingImg } from './FloatingButton'

lowlight.register({ ts })

const Main = () => {
    const editor = useEditor({
        extensions: [StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: 'outline-none'
            }
        }
    })
    return (
        <>
            <EditorContent className="max-w-[700px] mx-auto pt-16 prose" editor={editor}
            />
            {editor && (<FloatingMenu editor={editor} shouldShow={({ state }) => {
                const { $from } = state.selection
                const currentLineText = $from.nodeBefore?.textContent

                return currentLineText === '/'
            }} className='bg-zinc-200 shadow-lg py-2 px-1 shadow-black/20 border-zinc-600 overflow-hidden rounded-lg flex flex-col'>
                <FloatingButton>
                    <FloatingImg src='https://www.notion.so/images/blocks/text/en-US.png' />
                    <div className='flex flex-col text-left'>
                        <span className='text-sm'>Texto</span>
                        <span className='text-xs text-zinc-400'>Comece escrever o texto sem forma...</span>
                    </div>
                </FloatingButton>
                <FloatingButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                    <FloatingImg src='https://www.notion.so/images/blocks/header.57a7576a.png' />
                    <div className='flex flex-col text-left'>
                        <span className='text-sm'>Titulo 1</span>
                        <span className='text-xs text-zinc-400'>Titulo de seção grande</span>
                    </div>
                </FloatingButton>
                <FloatingButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                    <FloatingImg src='https://www.notion.so/images/blocks/subheader.9aab4769.png' />
                    <div className='flex flex-col text-left'>
                        <span className='text-sm'>Titulo 2</span>
                        <span className='text-xs text-zinc-400'>Titulo de seção médio</span>
                    </div>
                </FloatingButton>
                <FloatingButton onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <FloatingImg src='https://www.notion.so/images/blocks/bulleted-list.0e87e917.png' />
                    <div className='flex flex-col text-left'>
                        <span className='text-sm'>Lista com marcadores</span>
                        <span className='text-xs text-zinc-400'>Criar uma lista ccom marcadores simples</span>
                    </div>
                </FloatingButton>
            </FloatingMenu>)}

            {editor && (<BubbleMenu className='bg-zinc-200 shadow-lg shadow-black/20 border-zinc-600 overflow-hidden rounded-lg flex divide-x divide-zinc-500' editor={editor}>
                <BubbleButton onClick={() => editor.chain().focus().toggleBold().run()} data-active={editor.isActive('bold')}><RxFontBold className='w-5 h-5' />
                </BubbleButton>
                <BubbleButton onClick={() => editor.chain().focus().toggleItalic().run()} data-active={editor.isActive('italic')}><RxFontItalic className='w-5 h-5' />
                </BubbleButton>
                <BubbleButton onClick={() => editor.chain().focus().toggleStrike().run()} data-active={editor.isActive('strike')}><RxStrikethrough className='w-5 h-5' />
                </BubbleButton>
                <BubbleButton onClick={() => editor.chain().focus().toggleCode().run()} data-active={editor.isActive('code')}><RxCode className='w-5 h-5' />
                </BubbleButton>
            </BubbleMenu>)}

        </>
    )
}

export default Main 