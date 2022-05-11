import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import App from './App.test';

describe('1. Teste o componente <FavoritePokemons.js />', () => {
  test('Testa se é exibida na tela a mensagem', () => {
    renderWithRouter(<App />);

    const message = screen.getByText('No favorite pokemon found');
    expect(message).toBeInTheDocument();
  });
});
