import { Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';

type Repository = {
  id: number;
  full_name: string;
  description?: string;
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
            <Fragment key={repo.id}>
              <ListGroup.Item>
                <div className="fw-bold">{repo.full_name}</div>
                <div>{repo.description}</div>
              </ListGroup.Item>
            </Fragment>
          ))}
        </ListGroup>
      )
    }
    </>
  )
}