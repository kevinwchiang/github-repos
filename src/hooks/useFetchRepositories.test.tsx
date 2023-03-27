import { renderHook } from '@testing-library/react-hooks';
import { FormProps } from '../pages/Repositories';
import { useFetchRepositories } from './useFetchRepositories';

describe('useFetchRepositories', () => {
  const form: FormProps = {
    search: 'react',
    searchType: 'user',
    order: 'desc',
    per_page: 10,
    page: 1,
    sort: 'stars',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch repositories and update state', async () => {
    const mockResponse = {
      total_count: 1,
      items: [{ id: 123, full_name: 'test-repo' }],
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchRepositories(form)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.repositories).toHaveLength(1);
    expect(result.current.repositories[0].id).toBe(123);
    expect(result.current.totalCount).toBe(1);
  });
});
