import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import PokemonList from './PokemonList';

describe('renders', () => {
    const initialState = {};
    const mockStore = configureMockStore([]);
    mockStore(initialState);

    const store = mockStore({
        PokemonList: { data: {} }
      });
    
    it('PokemonList', () => {
        const act = TestRenderer;
        const root = act.create(
                <Provider store={store}>
                    <PokemonList />
                </Provider>
            );
        expect(root).toMatchSnapshot();
    });
});
