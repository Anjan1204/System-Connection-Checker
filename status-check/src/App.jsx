// src/App.jsx
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState('');

  const checkConnection = () => {
    if (navigator.onLine) {
      setStatus('✅ System Is Online');
    } else {
      setStatus('❌ System is Offline');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🕵️‍♂️ Internet Status Checker</h1>
      <button onClick={checkConnection} style={styles.button}>
        Check Status
      </button>
      <p style={styles.status}>{status}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#4b0082',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#00bcd4',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '#fff',
    marginTop: '20px',
  },
  status: {
    marginTop: '30px',
    fontSize: '1.5rem',
    color: '#333',
  },
};

export default App;
