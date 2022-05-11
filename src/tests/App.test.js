import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../components/renderWithRouter';
import App from '../App';

describe('1. Teste o componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /Home/i });
    userEvent.click(linkHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('O segundo link deve possuir o texto About', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /About/i });
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFavoritePokemons);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  //

  // expect(linkAbout).toBeInTheDocument();

  //
  // expect(linkFavoritePokemons).toBeInTheDocument();

  // test('Teste ao clicar no link Home redireciona para a página inicial', () => {
  //   const { history } = renderWithRouter(<App />);

  //   const linkHome = screen.getByRole('link', { name: /Home/i });
  //   expect(linkHome).toBeInTheDocument();

  //
  //   console.log(pathname);
  // });

  // test('Teste se a aplicação é redirecionada para a página de About', () => {
  //   const { history } = renderWithRouter(<App />);

  //   const linkAbout = screen.getByRole('link', { name: /About/i });
  //   expect(linkAbout).toBeInTheDocument();

  //   userEvent.click(linkAbout);
  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/about');
  // });

  // test('Teste se a aplicação é redirecionada para a página de About', () => {
  //   const { history } = renderWithRouter(<App />);

  //   const linkFavoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
  //   expect(linkFavoritePokemons).toBeInTheDocument();

  //   userEvent.click(linkFavoritePokemons);
  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/fovorites');
  // });

  // test('Teste se a aplicação é redirecionada para a página Not Found ', () => {
  //   renderWithRouter(<App />);
  //   const notFound = screen
  //     .getByText('Page requested not found 😭');
  //   expect(notFound).toBeInTheDocument();
  // });
});
