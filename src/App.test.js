import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

describe('things are rendered', () => {
  it('renders "main" component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByRole('main')).toBeInTheDocument();
  });
});