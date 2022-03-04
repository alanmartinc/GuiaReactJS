import {useState} from "react";

function App() {
  const [name, setName] = useState("Alan");

  const handleHeyClick = () => {
    setName("Martin");
  }

  return (
    <div>
      <h2>Hola {name}</h2>
      <button onClick={handleHeyClick}>Hey</button>
    </div>
  );
}

export default App;