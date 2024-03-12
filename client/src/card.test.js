import React from 'react';
import { render } from '@testing-library/react';
import Card from './components/Card';

describe('Card', () => {
  it('renders without crashing', () => {
    render(<Card drivers={[]} onClick={() => {}} />);
    // Verifica que el componente esté presente en el DOM
    expect(document.querySelector('.container-cards-drivers')).toBeInTheDocument();
  });
});
