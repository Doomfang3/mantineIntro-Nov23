import { AppShell, Button, Group, Title } from '@mantine/core'
import { Link, Route, Routes } from 'react-router-dom'
import AllSingersPage from './pages/AllSingersPage'
import NewSingerPage from './pages/NewSingerPage'

function App() {
  return (
    <>
      <AppShell header={{ height: 60 }} padding='md'>
        <AppShell.Header>
          <Group h='100%' px='md'>
            <Button component={Link} to='/'>
              Home
            </Button>
            <Button component={Link} to='/singers'>
              All singers
            </Button>
            <Button component={Link} to='/singers/new'>
              New singer
            </Button>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Routes>
            <Route path='/' element={<Title order={1}>Home page</Title>} />
            <Route path='/singers' element={<AllSingersPage />} />
            <Route path='/singers/new' element={<NewSingerPage />} />

            <Route path='*' element={<Title order={1}>404 page</Title>} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </>
  )
}

export default App
