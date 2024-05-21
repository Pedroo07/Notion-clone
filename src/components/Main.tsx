import { useEditor,EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

const Main = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World</p>'
    })
  return (
    <EditorContent className="max-w-[700px] mx-auto pt-16" editor={editor}
    />
  )
}

export default Main