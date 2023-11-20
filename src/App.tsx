import { Route, Routes} from 'react-router-dom';
import Home from './views/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = (): JSX.Element => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
