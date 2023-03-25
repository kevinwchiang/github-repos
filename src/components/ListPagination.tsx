import { Pagination } from 'react-bootstrap';
import { FormProps } from '../pages/Repositories';

type PaginationProps = {
  totalCount: number;
  perPage: number;
  currentPage: number;
  updateForm: (form: Partial<FormProps>) => void;
  form: FormProps;
}

export function ListPagination({ totalCount, perPage, currentPage, updateForm, form }: PaginationProps) {
  const totalPages = perPage ? Math.ceil(totalCount / perPage) : 1;
  const paginationItems = [];

  const handleClick = (page: number) => {
    updateForm({ ...form, page })
  };

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => handleClick(i)}>
        {i}
      </Pagination.Item>
    )
  }

  return (
    <Pagination className="justify-content-center">
      {paginationItems}
    </Pagination>
  );
}
