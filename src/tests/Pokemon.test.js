import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import App from '../App';

describe('6. Teste o componente <Pokemon.js />', () => {
  test('O nome correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByText(/pikachu/i);
    expect(namePokemon).toBeInTheDocument();
  });

  test('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toHaveTextContent(/Electric/i);
  });

  test('O peso médio do pokémon deve ser exibido', () => {
    renderWithRouter(<App />);

    const averageWeightPokemon = screen.getByText(/average weight: 6\.0 kg/i);
    expect(averageWeightPokemon).toBeInTheDocument();
  });

  test(' imagem do pokémon deve ser exibida', () => {
    renderWithRouter(<App />);

    const imagePokemons = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagePokemons).toHaveAttribute(
      'src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );
  });

  test(' imagem do pokémon deve ser exibida', () => {
    renderWithRouter(<App />);

    const linkPokemon = screen.getByRole('link', { name: /more details/i });
    expect(linkPokemon).toBeInTheDocument('/pokemons/25');
  });

  test('Teste se ao clicar no link de navegação do pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const linkNavigation = screen.getByRole('link', { name: /more details/i });

    userEvent.click(linkNavigation);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  // test('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {

  // });

  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const star = screen.getAllByAltText(/Pikachu is marked/);
    expect(star[0].src).toContain('/star-icon.svg');
  });
});
