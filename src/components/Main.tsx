import { EditorContent, useEditor } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import StarterKit from "@tiptap/starter-kit"
import {common, createLowlight} from 'lowlight'
const lowlight = createLowlight(common)
import ts from 'highlight.js/lib/languages/typescript'

import 'highlight.js/styles/monokai.css'

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
        <EditorContent className="max-w-[700px] mx-auto pt-16 prose" editor={editor}
        />
    )
}

export default Main