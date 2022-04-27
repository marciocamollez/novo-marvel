import { BrowserRouter } from 'react-router-dom';
import './App.css';

//Importando arquivo de Rotas
import { AppRoutes } from './routes';

export const App = () => {

  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App;

