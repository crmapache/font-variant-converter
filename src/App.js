import './App.css';

function App() {
  const onClick = async () => {
    const convertValue = (value) => {
      return value.replaceAll('.','')
        .replaceAll('#','')
        .replaceAll("-", '')
        .replaceAll("/", '')
        .split(/\s+/)
        .map((item, index) => {
          if (index === 0) {
            return item.toLowerCase()
          } else {
            return item.charAt(0).toUpperCase() + item.slice(1)}}).join('')
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
