import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('7. Teste o componente <PokemonDetails.js />', () => {
  test('A página deve conter um texto nome Details', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);

    const nameDetails = screen.getByText('Pikachu Details');
    expect(nameDetails).toBeInTheDocument();
  });

  test('A imagem da localização um atributo src com a URL da localização;', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);

    const pokemonLocation = screen.getAllByAltText(/Pikachu location/i);
    expect(pokemonLocation[0]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');

    expect(pokemonLocation[1]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('conter um parágrafo com o resumo do pokémon específico sendo visualizado', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);

    const pokemonFavoritado = screen.getByText(/pokémon favoritado\?/i);
    expect(pokemonFavoritado).toBeInTheDocument();
  });

  test('um heading h2 com o texto Game Locations of <name>', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);

    const gameLocations = screen.getByRole(
      'heading', { name: /game locations of pikachu/i },
    );
    expect(gameLocations).toBeInTheDocument();
  });

  test('Na seção de detalhes deverá existir um heading h2 ', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);

    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();

    screen.getByText(
      'This intelligent Pokémon roasts hard berries '
      + 'with electricity to make them tender enough to eat.',
    );
  });
});
