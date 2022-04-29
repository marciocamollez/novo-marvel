import { render, screen } from '@testing-library/react';
import { Contagem } from './index';

describe("Componente de Contagem", () => {
    test('deve encontrar o texto renderizado com a contagem', () => {
        render(<Contagem />);
        const textoContar = screen.getByTestId("contar-herois");
        expect(textoContar);
    });
      
});
