import './App.css';

function App() {
  const onClick = async () => {
    const convertValue = (value) => {
      const splittedValue = value.split(/[\s#./-]/).map(word => word.trim()).filter(word => Boolean(word))
      const result = splittedValue.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
      return result.charAt(0).toLowerCase() + result.slice(1)
    }
    
    const value = await navigator.clipboard.readText()
    await navigator.clipboard.writeText(convertValue(value));
  }
  
  return (
    <div className="App">
      <button onClick={onClick}>CONVERT ME</button>
    </div>
  );
}

export default App;
