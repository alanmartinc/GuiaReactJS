import {useState} from "react";

// Componente funcional
const App = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleLoginClick = () => {
    setIsLogged(true);
  };

  return (
    <div>
      <label>
        user
        <input value={user} onChange={({target: {value}}) => setUser(value)} />
      </label>

      <br />
      <br />

      <label>
        Password
        <input value={password} onChange={({target: {value}}) => setPassword(value)} />
      </label>

      <br />
      <br />

      <button onClick={handleLoginClick}>
        Iniciar Sesión
      </button>

      {isLogged && <h2>Logeado exitosamente!</h2>}
    </div>
  );
}

export default App;