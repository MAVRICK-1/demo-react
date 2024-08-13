import './App.css';
import video from './deadpool-wolverine-bye-bye.mp4'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        controls
        preload="auto"
      />
    </div>
  );
}

export default App;
