import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import apiMarvel from '../../api/apiMarvel';
import MainPage from './MainPage';
import { TitleContext } from '../Root';
import { type Mock, vi } from 'vitest';

vi.mock('../../api/apiMarvel', () => ({
  default: {
    getList: vi.fn(() => []),
  },
}));

const mockGetList = apiMarvel.getList as Mock;

describe('MainPage', () => {
  const title = 'test title for main page';

  afterEach(() => {
    vi.clearAllMocks();
    window.localStorage.clear();
  });

  it('provider function is called', () => {
    const mockFunc = vi.fn();
    render(
      <TitleContext.Provider value={mockFunc}>
        <MainPage title={title} />
      </TitleContext.Provider>
    );

    expect(mockFunc).toBeCalledTimes(1);
    expect(mockFunc).toBeCalledWith(title);
  });

  it('should save search query to local storage', async () => {
    const searchQuery = 'spider-man';

    render(
      <TitleContext.Provider value={() => {}}>
        <MainPage title={title} />
      </TitleContext.Provider>
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(async () => {
      await userEvent.type(input, searchQuery);
      await userEvent.click(button);
    });

    expect(window.localStorage.getItem('searchQuery')).toBe(searchQuery);
  });

  it('should render filtered hero list', async () => {
    const heroList = [
      { id: '1', name: 'Spider-Man', thumbnail: { path: '', extension: '' }, urls: [{ url: '' }] },
      { id: '2', name: 'Iron Man', thumbnail: { path: '', extension: '' }, urls: [{ url: '' }] },
      { id: '3', name: 'Hulk', thumbnail: { path: '', extension: '' }, urls: [{ url: '' }] },
    ];
    mockGetList.mockResolvedValueOnce(heroList);

    render(
      <TitleContext.Provider value={() => {}}>
        <MainPage title={title} />
      </TitleContext.Provider>
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(async () => {
      await userEvent.type(input, 'man');
      await userEvent.click(button);
    });

    const marvelList = screen.getByRole('list');
    const marvelItems = screen.getAllByRole('listitem');

    expect(marvelList).toBeInTheDocument();
    expect(marvelItems).toHaveLength(2);
    expect(mockGetList).toHaveBeenCalledTimes(1);
  });
});
