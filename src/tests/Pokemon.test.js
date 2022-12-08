import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

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

    const averageWeightPokemon = screen.getByText(/average weight: 6\.0 kg/i);
    expect(averageWeightPokemon).toBeInTheDocument();

    const imagePokemons = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagePokemons).toHaveAttribute(
      'src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );
  });

  // test('Teste se o card do pokémon indicado na Pokédex um link de navegaçã', () => {
  //   renderWithRouter(<App />);
  //   const linkPokemon = screen.getByRole('link', { name: /more details/i });
  //   expect(linkPokemon.href).toContain('/pokemons/25');
  // });

  // test('Teste se ao clicar no link de navegação do pokémon', () => {
  //   const { history } = renderWithRouter(<App />);
  //   const linkNavigation = screen.getByRole('link', { name: /more details/i });

  //   userEvent.click(linkNavigation);

  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/pokemons/25');
  // });

  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const linkNav = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkNav);

    const checkBox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkBox);

    const star = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(star).toHaveAttribute('src', '/star-icon.svg');
    expect(star.alt).toContain('Pikachu is marked as favorite');
  });
});
