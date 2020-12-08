import React from "react";
import { Stage } from "./component/SvgProvider";
import Zoom from "./component/Zoom";

function App() {
  return (
    <div className="App">
      <Stage width="100%" height="100%">
        <Zoom>
          <text>Hello, World!</text>
        </Zoom>
      </Stage>
    </div>
  );
}

export default App;
