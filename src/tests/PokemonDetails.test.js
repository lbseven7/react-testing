import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import PokemonDetails from '../components/PokemonDetails';

describe('7. Teste o componente <PokemonDetails.js />', () => {
  test('A página deve conter um texto nome Details', () => {
    renderWithRouter(<PokemonDetails />);

    const namePokemonDetails = screen.getByRole(
      'heading', { name: /`${name} Details`/i },
    );
    expect(namePokemonDetails).toBeInTheDocument();
  });

  test('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    renderWithRouter(<PokemonDetails />);
    const summary = screen.getByRole('heading', { level: 2, name: /summary/i });
    expect(summary).toBeInTheDocument();
  });

  test('Na seção de detalhes deverá existir um heading h2 ', () => {
    renderWithRouter(<PokemonDetails />);
    const paragraph = screen.getByText(
      /this intelligent pokémon roasts to make them tender enough to eat/i,
    );
    expect(paragraph).toBeInTheDocument();
  });
});
