/// <reference types="jest" />
import { jest, describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CitySearch } from '../CitySearch';
import { CityProvider } from '@/context/CityContext';

interface CityCoordinate {
  name: string;
  lat: number;
  lon: number;
}

type CityCoordinates = Record<string, CityCoordinate>;

// Mock data
const mockCityCoordinates: CityCoordinates = {
  istanbul: { name: 'İstanbul', lat: 41.0082, lon: 28.9784 },
  ankara: { name: 'Ankara', lat: 39.9334, lon: 32.8597 }
};

// Mock the cities utility
jest.mock('@/utils/cities', () => ({
  cityCoordinates: mockCityCoordinates,
  getCityNameFromInput: (input: string): string => {
    const city = Object.entries(mockCityCoordinates)
      .find(([key]) => key.toLowerCase() === input.toLowerCase());
    if (!city) throw new Error('Şehir bulunamadı');
    return city[0];
  }
}));

describe('CitySearch Component', () => {
  const user = userEvent.setup();

  const renderComponent = () => {
    return render(
      <CityProvider>
        <CitySearch />
      </CityProvider>
    );
  };

  it('should render search input', () => {
    renderComponent();
    const input = screen.getByPlaceholderText(/şehir adı/i);
    expect(input).toBeInTheDocument();
  });

  it('should show suggestions when typing', async () => {
    renderComponent();
    const input = screen.getByPlaceholderText(/şehir adı/i);
    
    await user.type(input, 'ist');
    
    await waitFor(() => {
      expect(screen.getByText('İstanbul')).toBeInTheDocument();
    });
  });

  it('should handle city selection', async () => {
    renderComponent();
    const input = screen.getByPlaceholderText(/şehir adı/i);
    
    await user.type(input, 'ist');
    await waitFor(() => {
      expect(screen.getByText('İstanbul')).toBeInTheDocument();
    });
    await user.click(screen.getByText('İstanbul'));
    
    expect(input).toHaveValue('İstanbul');
  });
}); 