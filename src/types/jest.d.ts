import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Mock<TReturn = unknown, TArgs extends Array<unknown> = Array<unknown>> {
      mockResolvedValueOnce: (value: TReturn) => Mock<TReturn, TArgs>;
      mockRejectedValueOnce: (error: Error) => Mock<TReturn, TArgs>;
    }
  }
}

// Global test tipleri için
declare global {
  interface Window {
    matchMedia: jest.Mock<{
      matches: boolean;
      media: string;
      onchange: null;
      addListener: jest.Mock;
      removeListener: jest.Mock;
      addEventListener: jest.Mock;
      removeEventListener: jest.Mock;
      dispatchEvent: jest.Mock;
    }>;
  }
}

// API yanıt tipleri
interface ApiResponse<T = unknown> {
  ok: boolean;
  json: () => Promise<T>;
}

// Global fetch mock tipleri
declare global {
  interface FetchMock extends jest.Mock<Promise<ApiResponse>> {
    mockResolvedValueOnce: (value: Partial<ApiResponse>) => FetchMock;
    mockRejectedValueOnce: (error: Error) => FetchMock;
  }

  // ESLint: disable-next-line no-var
  let fetch: FetchMock;
}

// Jest ortamı için global değişkenler
declare global {
  // ESLint: disable-next-line no-var
  let global: {
    fetch: FetchMock;
  } & typeof globalThis;
}

export {}; 