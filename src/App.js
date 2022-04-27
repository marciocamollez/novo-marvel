import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
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

