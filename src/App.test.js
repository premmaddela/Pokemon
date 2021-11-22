import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const mockStore = configureMockStore([thunk]);

test('renders learn react link', () => {
  const store = mockStore({
    PokemonList: { loading: false }
  });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});
