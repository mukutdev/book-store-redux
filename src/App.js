import { Provider } from 'react-redux';
import './App.css';
import BookContainer from './components/BookContainer';
// import Header from './components/Header';
import store from './redux/store';

function App() {
  return (
   <Provider store={store}>
     <div className="App">
        {/* <Header/> */}
        <BookContainer/>
      
    </div>
   </Provider>
  );
}

export default App;
