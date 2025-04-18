import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Grid,
  AppBar,
  Toolbar,
  Pagination,
} from '@mui/material'
import React from 'react'

import { usePokemonList } from './api/pokemons-pagination'
import { PokemonDetailContainer } from './components/PokemonDetail'
import PokemonCard from './components/PokemonCard'

function App() {
  const [page, setPage] = React.useState(1)
  const [selectedPokemonId, setSelectedPokemonId] = React.useState<number | null>(null)
  const itemsPerPage = 20

  const { data, isLoading, error } = usePokemonList(page, itemsPerPage)

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo(0, 0)
  }

  const handlePokemonSelect = (id: number) => {
    setSelectedPokemonId(id)
  }

  const handleBackToList = () => {
    setSelectedPokemonId(null)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ポケモン図鑑
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {selectedPokemonId ? (
          <PokemonDetailContainer 
            pokemonId={selectedPokemonId} 
            onBack={handleBackToList}
          />
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              ポケモン一覧
            </Typography>
            
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Typography color="error">エラー: {error.message}</Typography>
            ) : (
              <Grid container spacing={2}>
                {data?.results.map((pokemon) => (
                  <Grid item xs={6} sm={3} key={pokemon.name}>
                    <PokemonCard 
                      pokemon={pokemon} 
                      onClick={handlePokemonSelect}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
            
            {!isLoading && !error && data && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
                <Pagination 
                  count={Math.ceil((data.count || 0) / itemsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </>
  )
}

export default App
