import { Button, Form, Dropdown } from 'react-bootstrap';
import { FormProps } from '../pages/Repositories';

type SearchFormProps = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  updateForm: (form: Partial<FormProps>) => void;
  form: FormProps;
}

const sortOptions: FormProps['sort'][] = ['best-match', 'stars', 'forks', 'help-wanted-issues', 'updated'];

function getSortOptionLabel(option: FormProps['sort']): string {
  switch (option) {
    case 'best-match':
      return 'Best Match';
    case 'stars':
      return 'Stars';
    case 'forks':
      return 'Forks';
    case 'help-wanted-issues':
      return 'Help Wanted Issues';
    case 'updated':
      return 'Updated';
    default:
      return '';
  }
}

export function SearchForm({ onSubmit, updateForm, form } : SearchFormProps) {
  const { searchType, order, sort } = form;

  return (
    <Form>
      <Form.Group className="mb-3 mt-3">
        <Form.Check 
          type='radio'
          label='Search by username'
          checked={searchType === 'user'}
          onChange={() => updateForm({ ...form, searchType: 'user' })}
        />
        <Form.Check
          type='radio'
          label='Search by organization'
          checked={searchType === 'org'}
          onChange={() => updateForm({ ...form, searchType: 'org' })}
        />
      </Form.Group>
      <Form.Group className="mb-3 mt-3">
        <Form.Control type="text" placeholder={searchType === 'user' ? "Enter username" : "Enter organization"} onChange={(e) => updateForm({ ...form, search: e.target.value })} />
      </Form.Group>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort options
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {sortOptions.map((option) => (
            <Dropdown.Item
              key={option}
              active={option === sort}
              onClick={() => updateForm({ ...form, sort: option })}
            >
              {getSortOptionLabel(option)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Form.Group className="mb-3 mt-3">
        <Form.Check 
          type='radio'
          label='asc'
          checked={order === 'asc'}
          onChange={() => updateForm({ ...form, order: 'asc' })}
        />
        <Form.Check
          type='radio'
          label='desc'
          checked={order === 'desc'}
          onChange={() => updateForm({ ...form, order: 'desc' })}
        />
      </Form.Group>
      <Button onClick={onSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}