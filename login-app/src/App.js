import {useState} from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
  };

  // Destructuring
  const handlePasswordChange = ({target: {value}}) => setPassword(value);
  const handleEmailChange = ({target: {value}}) => setEmail(value);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>

        <label>
          Contraseña
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>

        <button type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}

export default App;