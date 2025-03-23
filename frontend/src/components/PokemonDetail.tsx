import React from 'react'
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Chip, 
  LinearProgress, 
  Button,
  CircularProgress
} from '@mui/material'
import { usePokemonDetail } from '../api/pokemon-detail'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { PokemonDetail } from '../types/pokemon'

interface PokemonDetailProps {
  pokemon: PokemonDetail
  onBack: () => void
}

export default function PokemonDetailView({ pokemon, onBack }: PokemonDetailProps) {
  // タイプの色マッピング
  const typeColors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  }

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={onBack}
          sx={{ mb: 2 }}
        >
          一覧に戻る
        </Button>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h4">
            No.{pokemon.id}
          </Typography>
            <Typography variant="h4" component="h2">
              {pokemon.name}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <img 
              src={pokemon.image} 
              alt={pokemon.name} 
              style={{ width: '200px', height: '200px' }}
            />
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Height</Typography>
            <Typography variant="body1">{pokemon.height / 10}m</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Weight</Typography>
            <Typography variant="body1">{pokemon.weight / 10}kg</Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>Type</Typography>
        <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
          {pokemon.types.map(type => (
            <Chip 
              key={type} 
              label={type} 
              sx={{ 
                backgroundColor: typeColors[type] || '#ccc',
                color: '#fff',
                fontWeight: 'bold'
              }} 
            />
          ))}
        </Box>

        <Typography variant="h6" gutterBottom>Abilities</Typography>
        <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {pokemon.abilities.map(ability => (
            <Chip key={ability} label={ability} variant="outlined" />
          ))}
        </Box>
        <Typography variant="h6" gutterBottom>Stats</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body2">HP: {pokemon.stats.hp}</Typography>
            <LinearProgress variant="determinate" value={pokemon.stats.hp / 255 * 100} color="success" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Attack: {pokemon.stats.attack}</Typography>
            <LinearProgress variant="determinate" value={pokemon.stats.attack / 255 * 100} color="error" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Defense: {pokemon.stats.defense}</Typography>
            <LinearProgress variant="determinate" value={pokemon.stats.defense / 255 * 100} color="info" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Special Attack: {pokemon.stats.special_attack}</Typography>
            <LinearProgress variant="determinate" value={pokemon.stats.special_attack / 255 * 100} color="secondary" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Special Defense: {pokemon.stats.special_defense}</Typography>
            <LinearProgress variant="determinate" value={pokemon.stats.special_defense / 255 * 100} color="warning" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Speed: {pokemon.stats.speed}</Typography>
            <LinearProgress variant="determinate" value={pokemon.stats.speed / 255 * 100} color="primary" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

interface PokemonDetailContainerProps {
  pokemonId: number | null
  onBack: () => void
}

export const PokemonDetailContainer: React.FC<PokemonDetailContainerProps> = ({ pokemonId, onBack }) => {
  const { data, isLoading, error } = usePokemonDetail(pokemonId)

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (error || !data) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography color="error">データの取得に失敗しました</Typography>
        <Button onClick={onBack} sx={{ mt: 2 }}>一覧に戻る</Button>
      </Box>
    )
  }

  return <PokemonDetailView pokemon={data} onBack={onBack} />
} 
