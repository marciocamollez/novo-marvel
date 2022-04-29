import { render, screen } from '@testing-library/react';
import { Busca } from './index';

describe("Componente de Busca", () => {
    test('deve encontrar o placeholder do campo de busca', () => {
        render(<Busca />);
        const inputSearch = screen.getByPlaceholderText(/Procure por heróis/i);
        expect(inputSearch).toBeInTheDocument();
    });
      
});
