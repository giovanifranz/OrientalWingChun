import Lanternas from './containers/Lanternas';
import Escola from './containers/Escola';
import Porque from './containers/Porque';
import Duvidas from './containers/Duvidas';
import Comece from './containers/Comece';
import Layout from './containers/Layout';

function App() {
  return (
    <Layout>
      <Lanternas />
      <Escola />
      <Porque />
      <Duvidas />
      <Comece />
    </Layout>
  );
}

export default App;
