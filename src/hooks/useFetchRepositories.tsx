import { useState, useEffect } from 'react';
import { FormProps } from '../pages/Repositories';

export function useFetchRepositories(form: FormProps) {
  const [repositories, setRepositories] = useState<{ id: number; full_name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchRepositories = async (form: FormProps) => {
    setLoading(true);
  
    const {
      search,
      searchType,
      order,
      per_page,
      page,
      sort,
    } = form;
  
    const query = `${searchType}:${search}`;
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`);
    
    const data = await response.json();
    setTotalCount(data.total_count);
    setRepositories(data.items);
    
    setLoading(false);
  }

  useEffect(() => {
    if (form.search) {
      fetchRepositories(form);
    }
  }, [form.page]);

  return { repositories, loading, fetchRepositories, totalCount };
}
