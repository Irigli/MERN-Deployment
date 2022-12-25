import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detailview from './components/detailview';
import Editview from './components/editview';
import Createview from './components/createview';
import Main from './views/main'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route element={<Main/>} path="/" />
              <Route element={<Createview/>} path="/pets/new" />
              <Route element={<Detailview/>} path="/pets/:id" />
              <Route element={<Editview/>} path="/pets/:id/edit"/>
            </Routes>
    	</BrowserRouter>
    </div>
  );
}

export default App;
