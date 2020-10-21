import React, { useCallback } from "react";

const DragAndDrop = (props) => {
  const handleDragStart = useCallback((e) => {
    console.log("fucj");
  }, []);

  return (
    <div draggable="true" onDragStart={handleDragStart}>
      <h1>ws</h1>
    </div>
  );
};

export default DragAndDrop;
