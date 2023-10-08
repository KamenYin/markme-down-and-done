import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

const markdownTemp = `# 僕⚛リアクト⚛マークダウンプレビューアようこそへ！


## The title means 'Welcome to My React Markdown Previewer' in English
### Where the ⚛ replaces the possessive particle の。。。in case you were wondering  
### Enough 日本語 for now, time for some cool coding stuff yay!.....😿:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.netflix.com/watch/81084396?trackId=255824129), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want! 
1. Also feel free to play around and break stuff, that's how we learn after all 😊
1. And last but not least, let's embed some images...if you feel like of course🙃:
1. I'll go first, here's the title of Skilled Teaser Takagi-San in Japanese. It's one of my favs can't recommend it enough😇



![A Logo from one of my favorite anime "からかい上手の高木さん"](https://upload.wikimedia.org/wikipedia/commons/f/f0/Karakai_j%C5%8Dzu_no_Takagi-san_logo.svg)`;





function App() {
  const [markdownText, setMarkdownText] = useState<string>(markdownTemp)
  

  return (
    <>
<div>
  <h1 className='header'>Markdown Previewer</h1>
  <div className="boxes-container">
    <textarea name="editor" id="editor" className='scrollme' value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
    <div id="preview" className='scrollme'>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  </div>
</div>
    </>
  )
}

export default App
