import { render, screen } from '@testing-library/react';
import { AppContext } from '../context/context';

import Card from '../components/layouts/Card/Card';

const mockBeers = [
  { id: 1, name: 'Beer 1', image_url: 'image1.jpg', description: 'lorem' },
  { id: 2, name: 'Beer 2', image_url: 'image2.jpg', description: 'lorem' },
  { id: 3, name: 'Beer 3', image_url: 'image3.jpg', description: 'lorem' },
];

const searchValue = 'search';

describe('Card List component', () => {
  it('renders the specified number of cards', () => {
    render(
      <AppContext.Provider value={{ beers: mockBeers, searchValue }}>
        <Card page={1} />
      </AppContext.Provider>
    );

    const cardElements = screen.getAllByRole('link');
    expect(cardElements.length).toBe(mockBeers.length);
  });

  it('displays an appropriate message if no cards are present', () => {
    render(<Card page={1} />);

    const errorMessage = screen.getByText(/This beers doesn't exist/i);
    expect(errorMessage);
  });
});
