import './App.css';
import Header from './Components/header';
import Banners from './Components/Banners';
import Footer from './Components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
function App() {
  return (
    <>
        <div>
         <Header />
        </div>
        <br></br>
        <div>
          <Banners/>
        </div>
        <br/><br/><br/><br/>
        <div>
          <Footer/>
        </div>
      </>
  );
}
export default App;
