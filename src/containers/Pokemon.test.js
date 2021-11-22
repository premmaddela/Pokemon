import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import Pokemon from './Pokemon';

describe('renders', () => {
    const initialState = {};
    const mockStore = configureMockStore([]);
    mockStore(initialState);

    const store = mockStore({
        Pokemon: { data: {} }
      });
    const props = {
        match: { params : { pokemon : {} }}
    };

    it('Pokemon', () => {
        const act = TestRenderer;
        const root = act.create(
                <Provider store={store}>
                    <Pokemon {...props} />
                </Provider>
            );
        expect(root).toMatchSnapshot();
    });
});
