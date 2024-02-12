import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App test', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
