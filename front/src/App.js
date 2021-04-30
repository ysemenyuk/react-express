import axios from 'axios';

const App = () => {

  axios.get('/')
    .then(resp => console.log(resp));

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
