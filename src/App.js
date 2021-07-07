import "./App.css";
import {} from "react-bootstrap/Button";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import Score from "./Components/ShowScore";
import store from './store';
import {Provider} from 'react-redux';


function App() {

  return (
    <Provider store={store}>
      <div className="App container">
        <Header />
        <Quiz />
        {/* <Score /> */}
      </div>
    </Provider>
  );
}

export default App;
