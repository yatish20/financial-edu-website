
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import Navbar from './components/Navbar';
import Signup from './components/Signup/Signup';
import Transaction from './components/transaction/Transaction';
import ChatBot from './components/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Include the Navbar here */}


        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/Chatbot" element={<ChatBot />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Transaction" element={<Transaction />} />

        </Routes>
        <ChatBot />
      </Router>
    </div>
  );
}


export default App;
