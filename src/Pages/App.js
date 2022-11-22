import Footer from '../Components/Footer/Footer';
import HeaderCanvas from '../Components/HeaderCanvas/HeaderCanvas';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import { Container, SafeArea } from './App.styles';

function App() {
  return (
    <Container>
      <HeaderCanvas />
      <SafeArea>
        A collection of links that I've found for a variety of programming and design topics.
        <NavigationBar>

        </NavigationBar>

      </SafeArea>
      <Footer />
    </Container>
  );
}

export default App;
