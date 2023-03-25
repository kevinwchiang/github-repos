import { ListGroup } from 'react-bootstrap';

type Repository = {
  id: number;
  full_name: string;
  description: string;
};

type Props = {
  repositories: Repository[];
  loading: boolean;
};

export function List({ repositories, loading } : Props) {
  return (
    <>
    {loading ?
      (
        <div>Loading...</div>
      ) : (
        <ListGroup className="mt-3 mb-3">
          {Array.isArray(repositories) && repositories.map(repo => (
            <>
              <ListGroup.Item key={repo.id}>
                <div className="fw-bold">{repo.full_name}</div>
                <div>{repo.description}</div>
              </ListGroup.Item>
            </>
          ))}
        </ListGroup>
      )
    }
    </>
  )
}