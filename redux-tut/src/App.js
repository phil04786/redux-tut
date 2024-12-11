import "./App.css";
import HomeContainer from "./containers/HomeContainer";
// import User from "./User";

//Passing Props to component

// function App() {
//   return (
//     <div className="App">
//       <User data={{ name: "qwerty", age: 26 }} />
//     </div>
//   );
// }

// export default App;

//=================================================================================================================================

function App() {
  return (
    <div className="App">
      <HomeContainer />
    </div>
  );
}

export default App;
