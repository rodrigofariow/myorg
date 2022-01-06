import { render } from '@testing-library/react';

import SharedLib from './shared-lib';

describe('SharedLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLib />);
    expect(baseElement).toBeTruthy();
  });
});
