import { Box } from '@chakra-ui/react';
import Lanternas from './components/Lanternas';
import Escola from './components/Escola';
import Porque from './components/Porque';
import Duvidas from './components/Duvidas';
import Comece from './components/Comece';
import Footer from './components/Footer';
import HeaderSM from './components/HeaderSM';
import Header from './components/Header'

function App() {
  return (
    <>
      <Box
        display={["none", "none", "block"]}
      >
        <Box mt={-6}>
          <Header />
        </Box>
      </Box>
      <Box
        display={["block", "block", "none"]}
      >
        <Box mt={-8}>
          <HeaderSM />
        </Box>

      </Box>
      <Lanternas />
      <Escola />
      <Porque />
      <Duvidas />
      <Comece />
      <Footer />
    </>
  );
}

export default App;
