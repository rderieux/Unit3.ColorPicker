import { useState } from "react";
// Write your Color component here

const Color = (props) => {
  const { color, selectedColor, setSelectedColor } = props;
  const className = color === selectedColor ? `${color} selected` : color;
  return (
    <div
      className={className}
      onClick={() => props.setSelectedColor(props.color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="blue"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="orange"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;
