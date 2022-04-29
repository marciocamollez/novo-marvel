import { render, screen } from '@testing-library/react';
import App from './App';

describe("Componente Principal", () => {

    test('deve renderizar o componente principal e achar o título inicial <h1>', () => {
      render(<App />);
      const linkElement = screen.getByText(/Explore o Universo/i);
      expect(linkElement).toBeInTheDocument();
    });

});
