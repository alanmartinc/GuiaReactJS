import {useEffect, useState} from "react";

const jsonData = [{
  key: "1",
  name: "Juan",
}, {
  key: "2",
  name: "Valeria",
}, {
  key: "3",
  name: "Lucas",
}, {
  key: "4",
  name: "Alan",
}];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const renderData = () => {
    return jsonData?.map((value) => (
      <div key={value.key}>
        <p>{value.name}</p>
      </div>
    ));
  }

  return (
    <div>
      {isLoading ? <h2>Is Loading...</h2> : renderData()}
    </div>
  );
}

export default App;