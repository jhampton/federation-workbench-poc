import * as React from "react";
import { ResizablePanels } from "./components/ResizeablePanels";
import Editor from "@monaco-editor/react";
import "@apollo/space-kit/reset.css"; // import this at app root
import * as colors from "@apollo/space-kit/colors";

// const editor = {
//   schema: null
// };
const App = (_: any) => {
  return (
    <div className="App" style={{ backgroundColor: colors.colors.black.dark }}>
      <ResizablePanels>
        <Editor
          height="90vh"
          theme="vs-dark"
          language="graphql"

          // ref={r => (editor.schema = r)}
        />
        <Editor
          height="90vh"
          theme="vs-dark"
          language="graphql"

          // ref={r => (editor.schema = r)}
        />
        <div style={{ backgroundColor: "#000" }} />
      </ResizablePanels>
      ;
    </div>
  );
};

export { App };
