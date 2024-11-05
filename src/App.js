import "./App.css";
import { marked } from "marked";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [showExample, setShowExample] = useState(false);
  const exampleMarkdown = `# Heading
=======

## Sub-heading
-----------

### Another deeper heading

Paragraphs are separated by a blank line.

Leave 2 spaces at the end of a line to do a line break

Text attributes *italic*, **bold**, \`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in Spain.

 *[Searslan]*`;

  const handleExampleToggle = () => {
    if (showExample){
      setMarkdown("");
    }else{
      setMarkdown(exampleMarkdown);
    }
    setShowExample(!showExample);
  };
  return (
    <div className="App">
      <header>
        <h1>Markdown Ön İzleyici</h1>{" "}
        <button onClick={handleExampleToggle}>
          {showExample ? "Örneği Kapat" : "Örnek Markdown Göster"}
        </button>
      </header>
      <div className="container">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Markdown formatında yazın..."
        />
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
