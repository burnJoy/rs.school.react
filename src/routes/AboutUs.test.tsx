import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { TitleContext } from './Root';
import AboutUs from './AboutUs';

describe('About us page', () => {
  const title = 'test title for about us page';

  it('provider function is called', () => {
    const mockFunc = vi.fn();
    render(
      <TitleContext.Provider value={mockFunc}>
        <AboutUs title={title} />
      </TitleContext.Provider>
    );

    expect(mockFunc).toBeCalledTimes(1);
    expect(mockFunc).toBeCalledWith(title);
  });
});
