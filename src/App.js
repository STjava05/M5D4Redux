import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carton from './components/Carton';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './components/reducers/store';
import NavBar from './components/navBar';
import Category from './components/category';
import ModalCommenti from './components/modalCommenti';

function App() {


  return (
    <Provider store={store}>
      <div>
        <Container>
          <NavBar/>
          <Carton />
          <Category/>
          <ModalCommenti/>
          
        </Container>
      </div>
    </Provider>
  );
}

export default App;
