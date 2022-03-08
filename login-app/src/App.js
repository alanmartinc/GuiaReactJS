import {useState, useEffect} from "react";

// Componente funcional
const App = () => {
  const [name, setName] = useState("");

  // componentDidMount
  useEffect(() => {
    console.log("componentDidMount")

    // componentWillUnmount
    return () => {
      console.log("componentWillUnmount")
    }
  }, []);

  useEffect(() => {
    console.log("name cambio")
  }, [name]);

  // componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate")
  });

  return (
    <div>
      <input value={name} onChange={({target: {value}}) => setName(value)} />
    </div>
  );
}

export default App;