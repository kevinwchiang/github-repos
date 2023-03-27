import { useFetchRepositories } from '../hooks/useFetchRepositories';
import { SearchForm } from '../components/SearchForm';
import { useState, useCallback } from 'react';
import { List } from '../components/List';
import { ListPagination } from '../components/ListPagination';

export type FormProps = {
  search?: string;
  searchType?: 'user' | 'org';
  order?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
  sort?: 'best-match' | 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
}

const defaultForm: FormProps = {
  search: '',
  searchType: 'user',
  order: 'desc',
  per_page: 5,
  page: 1,
  sort: 'best-match',
}

export function Repositories() {
  const [form, updateForm] = useState<FormProps>(defaultForm);
	const { repositories, loading, fetchRepositories, totalCount } = useFetchRepositories(form);

  const onFormSubmit = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetchRepositories(form);
  }, [fetchRepositories, form]);

	return (
    <>
      <SearchForm
        form={form}
        updateForm={updateForm}
        onSubmit={onFormSubmit}
      />
      <List loading={loading} repositories={repositories} />
      <ListPagination
        totalCount={totalCount}
        perPage={form.per_page || 1}
        currentPage={form.page || 1}
        updateForm={updateForm}
        form={form}
      />
    </>
  );
}