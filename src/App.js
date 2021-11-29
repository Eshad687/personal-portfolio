
import './App.css';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>

      <Navigation></Navigation>
      <Banner></Banner>
      <h1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim at. Eveniet explicabo vero doloremque autem saepe voluptatem ab asperiores dicta accusamus et quas dolor veniam, fugit, voluptatum id consectetur!</h1>
      <Projects></Projects>
    </div>
  );
}

export default App;
