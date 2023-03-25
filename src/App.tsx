import { Container } from 'react-bootstrap'
import { Repositories } from './pages/Repositories'

function App() {
  return (
    <Container>
      <h1 className="mt-5">Repositories</h1>
      <Repositories />
    </Container>
  )
}

export default App
