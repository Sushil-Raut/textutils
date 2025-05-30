import Alert from './Components/Aleart';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010a16';
      showAlert("Dark Mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* Directly render TextForm instead of using Routes */}
        <TextForm heading="Enter the text to Analyze" showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
