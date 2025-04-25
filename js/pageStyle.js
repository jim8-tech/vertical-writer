import { Editor, EditorContent } from '@tiptap/vue-2'
import { Heading, Bold, Paragraph } from '@tiptap/core'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
      charsPerLine: 20,
      linesPerPage: 20,
      pageHeight: 'calc(1.2em * 20)', // 20行分の高さ
    }
  },

  computed: {
    paginatedContent() {
      if (!this.editor) return []
      
      const text = this.editor.getText()
      const pages = []
      let currentPage = ''
      let lineCount = 0
      
      // 20文字×20行でページ分割
      for (let i = 0; i < text.length; i += this.charsPerLine) {
        const line = text.substr(i, this.charsPerLine)
        currentPage += line + '\n'
        lineCount++
        
        if (lineCount >= this.linesPerPage) {
          pages.push(currentPage)
          currentPage = ''
          lineCount = 0
        }
      }
      
      if (currentPage) pages.push(currentPage)
      return pages
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Heading.configure({ levels: [1, 2, 3] }),
        Bold,
        Paragraph,
      ],
      content: '<h3>タイトル</h3><p>ここに本文を入力...</p>',
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  }
}