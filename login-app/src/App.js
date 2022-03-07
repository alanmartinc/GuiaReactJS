import {useState, Component} from "react";

/* function App() {
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
} */

class App extends Component {
  // Se utiliza para declarar variables de estado
  constructor(props) {
    super(props);
    console.log("constructor");
    
    // Se declaran las props
    this.state = {
      name: "",
    }
  }

  // Se utiliza para hacer llamadas a la API
  componentDidMount() {
    console.log("Did Mount");
  }

  // Se utiliza para actualizar un nuevo estado
  componentDidUpdate() {
    console.log("Did Update");
  }

  // Previene renderings innecesarios
  shouldComponentUpdate() {
    return true;
  }

  // Se utiliza para ver el estado y propiedades previas antes de ser actualizadas
  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log(preProps, prevState);
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={({target: {value}}) => this.setState({name: value})} />
      </div>
    );
  }
}

export default App;