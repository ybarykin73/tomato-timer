import './App.css';
import Button from './components/button/Button';
import Circle from './components/circle/Circle';
import Timer from './components/timer/Timer';
function App() {
  return (
    <div className="App" >
      <div className='main'>
        <Circle strokeDashoffse={110} />
        <Timer />
      </div>
      <Button ariaLabel='Start'>
        Start
      </Button>
    </div>
  );
}

export default App;
