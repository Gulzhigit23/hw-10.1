import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import DataOfUsers from "./components/DataOfUsers";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      let result = await response.json();
      setUsers(result);

      console.log(result);
    };
    getData();
  }, []);
  return (
    <div className="App">
      {users.map((item) => {
        return (
          <div className="maindiv">
            <DataOfUsers
              key={item.id}
              title={item.title}
              id={item.id}
              url={item.thumbnailUrl}
            />
          
          </div>
        );
      })}
    </div>
  );
}

export default App;
