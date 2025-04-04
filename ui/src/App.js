import './App.css';
import Header from './components/Header';
import ListNews from './components/ListNews';
import UploadNews from './components/UploadNews';

function App() {
  return (
    <>
      <div className='split-section'>
        <Header />
        <UploadNews />
      </div>
      <ListNews />
    </>
  );
}

export default App;
