import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function TokenValidator() {
  // State initialization and declarations...
  const [availableDigits, setAvailableDigits] = useState('');
  const [generatedToken, setGeneratedToken] = useState('');
  const [validationResult, setValidationResult] = useState('');
  const [isTokenLoopRunning, setTokenLoopRunning] = useState(false);
  const [statistics, setStatistics] = useState({ total: 0, valid: 0 });
  const [validTokens, setValidTokens] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTokenGenerated, setIsTokenGenerated] = useState(false);

  // Function to generate a token
  const handleGenerateToken = async () => {
    if (!availableDigits.trim()) {
      setErrorMessage('Please enter available digits.');
      return;
    }
    try {
      const response = await axios.get('http://localhost:8081/generate-token', {
        params: { availableDigits: availableDigits },
      });
      const { token } = response.data;
      setGeneratedToken(token);
      updateStatistics(token);
      setValidationResult('');
      setErrorMessage('');
      setIsTokenGenerated(true);
    } catch (error) {
      console.error('Token generation failed:', error);
    }
  };

  // Function to validate a token
  const handleValidateToken = async () => {
    try {
      const response = await axios.post('http://localhost:8081/validate-token', { token: generatedToken });
      const { isValid } = response.data;
      setValidationResult(isValid ? 'Valid' : 'Invalid');
      if (isValid) {
        setValidTokens((prevValidTokens) => [...prevValidTokens, generatedToken]);
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  // Function to update statistics
  const updateStatistics = (token) => {
    setStatistics((prevStats) => ({
      total: prevStats.total + 1,
      valid: prevStats.valid + (isTokenValid(token) ? 1 : 0),
    }));
  };

  // Function to check if a token is valid
  const isTokenValid = (token) => {
    return true;
  };

  // Function to handle changes in availableDigits input
  const handleAvailableDigitsChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    setAvailableDigits(numericValue);
    if (inputValue !== numericValue) {
      setErrorMessage('Please enter numbers only.');
    } else {
      setErrorMessage('');
    }
  };

   // Effect for running token generation loop
   useEffect(() => {
    if (isTokenLoopRunning) {
      const interval = setInterval(() => {
        handleGenerateToken();
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isTokenLoopRunning, handleGenerateToken]);
  
  return (
    <div className="container">
    <div>
      <label>Select available digits: </label>
      <input
        type="text"
        placeholder="Consists of the 0-9 digits"
        value={availableDigits}
        onChange={handleAvailableDigitsChange}
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
    <div>
      <button className="btn" onClick={handleGenerateToken}>Generate Token</button>
      <button className="btn" onClick={handleValidateToken} disabled={!isTokenGenerated}>Validate Token</button>
    </div>
    <div><br/>
      <label>Generated Token: {generatedToken}</label>
      <p>Validation Result: {validationResult}</p>
    </div><br/>
    <div>
    <button className={`btn ${isTokenLoopRunning ? 'btn-stop' : 'btn-start'}`}
      onClick={() => setTokenLoopRunning(!isTokenLoopRunning)}>      
        {isTokenLoopRunning ? 'Stop Token Loop' : 'Start Token Loop'}
      </button>
    </div>
    <div>
      <div className="heading">
        <p className="sub-heading">Statistics:</p>
        <p>Total Tokens: {statistics.total}</p>
      </div>
    </div>
    <div>
      <div className="heading">
        <p className="sub-heading">List of Valid Tokens:</p>
        <p>Valid Tokens: {validTokens?.length}</p>
        <ul>
          {validTokens && validTokens?.map((token, index) => (
            <li key={index}>{token}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
  
}

export default TokenValidator;
