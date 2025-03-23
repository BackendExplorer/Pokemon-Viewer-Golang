import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material'
import { Pokemon } from '../types/pokemon'

interface PokemonCardProps {
  pokemon: Pokemon
  onClick: (id: number) => void
}

export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 3
        }
      }}
      onClick={() => onClick(pokemon.id)}
    >
      <Box sx={{ textAlign: 'center', mt: 2 }}>
          <img 
            src={pokemon.image}
            alt={pokemon.name}
            style={{ width: '120px', height: '120px', objectFit: 'contain' }}
          />
        </Box>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6">
            No.{pokemon.id}
          </Typography>
          <Typography variant="h6" component="div">
            {pokemon.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
} 
