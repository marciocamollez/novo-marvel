import { render, screen } from '@testing-library/react';
import { Ordenacao } from './index';

describe("Componente Ordenação", () => {

    test("deve checar se o botão de checkbox foi clicado", () => {
        render(<Ordenacao />);
        const botaoOrdenar = screen.getByTestId("ordenar");
        expect(botaoOrdenar);
    });

});
