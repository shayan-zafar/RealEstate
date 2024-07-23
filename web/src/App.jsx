import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Todoitem-1";
import Todoitem2 from "./components/Todoitem-2";
import "./App.css";
function App() {
  return (
    <>
      <center className="container">
        <AppName />
        <Addtodo />
        <div className="item-container ">
          <Todoitem1 />
          <Todoitem2 />
        </div>
      </center>
    </>
  );
}

export default App;
