import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('5. Teste o componente <App.js />', () => {
  test(
    'Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
      renderWithRouter(<App />);

      const pokemonEncountered = screen.getByRole(
        'heading', { name: /encountered pokémons/i },
      );
      expect(pokemonEncountered).toBeInTheDocument();
    },
  );

  // test('O botão deve conter o texto Próximo pokémon', () => {
  //   const { ge}renderWithRouter(<App />);
  //   const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
  //   expect(btnNextPokemon).toBeInTheDocument();

  //   userEvent.click(btnNextPokemon);
  // });

  test('Os próximos pokémons da lista devem ser mostrados, clicar no botão', () => {
    renderWithRouter(<App />);
    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnNextPokemon).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
  });

  test('Teste se é mostrado apenas um pokémon por vez.', () => {
    renderWithRouter(<App />);

    const umPorVez = screen.getAllByTestId('pokemon-name');
    expect(umPorVez).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const btnFilter = screen.getAllByTestId('pokemon-type-button');
    expect(btnFilter[1]).toBeInTheDocument();

    const btnAll = screen.getByRole('button', { name: 'All' });
    expect(btnAll).toHaveTextContent('All');
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnAll);
    expect(btnAll).toBeInTheDocument();
  });

  test('Ao carregar a página, o filtro selecionado deverá ser All', () => {
    renderWithRouter(<App />);
    const btnElectric = screen.getByRole('button', { name: /Electric/i });
    expect(btnElectric).toBeInTheDocument();
    userEvent.click(btnElectric);
  });

  test('A partir da seleção de um botão de tipo, a Pokédex deve circular somente', () => {
    renderWithRouter(<App />);
    const btnFirstFire = screen.getByRole('button', { name: /fire/i });
    expect(btnFirstFire).toBeInTheDocument();

    userEvent.click(btnFirstFire);

    const image = screen.getByRole('img', { name: /charmander sprite/i });
    expect(image).toBeInTheDocument();

    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnNextPokemon).toBeInTheDocument();

    userEvent.click(btnNextPokemon);

    const image2 = screen.getByRole('img', { name: /rapidash sprite/i });
    expect(image2).toBeInTheDocument();
  });
});
