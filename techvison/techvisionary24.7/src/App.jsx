import './App.css';
import './Contact.css';
import './Home.css';
import './Herosection.css';
import Navbar from './componests/Navbar';
import Herosection from './componests/Herosection';
import Footer from './componests/Footer';
import Home from './componests/Home';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Herosection />
            <Footer />
        </>
    );
}

export default App;
