import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ComponentName } from './ComponentName';
import type { ComponentNameProps } from './ComponentName';

const createMockProps = (overrides: Partial<ComponentNameProps> = {}): ComponentNameProps => ({
  title: 'Test Title',
  onAction: vi.fn(),
  className: '',
  ...overrides,
});

const renderComponent = (props: Partial<ComponentNameProps> = {}) => {
  const mockProps = createMockProps(props);
  return {
    ...render(<ComponentName {...mockProps} />),
    mockProps,
  };
};

describe('ComponentName', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render with required props', () => {
      renderComponent();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      renderComponent({ className: 'custom-class' });
      const component = screen.getByText('Test Title').closest('div');
      expect(component).toHaveClass('custom-class');
    });
  });

  describe('User Interactions', () => {
    it('should call onAction when button is clicked', async () => {
      const user = userEvent.setup();
      const { mockProps } = renderComponent({ showButton: true });
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(mockProps.onAction).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      renderComponent();
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label');
    });
  });
});
