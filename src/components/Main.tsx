import { EditorContent, useEditor } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import StarterKit from "@tiptap/starter-kit"
import {common, createLowlight} from 'lowlight'
import { BubbleMenu } from '@tiptap/react'
import {RxFontBold,RxFontItalic,RxStrikethrough,RxCode} from 'react-icons/rx'
const lowlight = createLowlight(common)
import ts from 'highlight.js/lib/languages/typescript'

import 'highlight.js/styles/monokai.css'
import BubbleButton from './BubbleButton'

lowlight.register({ts})

const Main = () => {
    const editor = useEditor({
        extensions: [StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        content: '<p>Hello World</p>',
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
        {editor && (<BubbleMenu className='bg-zinc-200 shadow-lg shadow-black/20 border-zinc-600 overflow-hidden rounded-lg flex divide-x-2 divide-zinc-6 00 ' editor={editor}>
            <BubbleButton onClick={() => editor.chain().focus().toggleBold().run()} data-active={editor.isActive('bold')}><RxFontBold className='w-5 h-5'/></BubbleButton>
            <BubbleButton onClick={() => editor.chain().focus().toggleItalic().run()} data-active={editor.isActive('italic')}><RxFontItalic className='w-5 h-5'/></BubbleButton>
            <BubbleButton onClick={() => editor.chain().focus().toggleStrike().run()} data-active={editor.isActive('strike')}><RxStrikethrough className='w-5 h-5'/></BubbleButton>
            <BubbleButton onClick={() => editor.chain().focus().toggleCode().run()} data-active={editor.isActive('code')}><RxCode className='w-5 h-5'/></BubbleButton>
        </BubbleMenu>)}
        
        </>
    )
}

export default Main 