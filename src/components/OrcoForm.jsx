import { useState } from 'react'
import {
  Button, Card, CardActions, CardContent, CardHeader,
  FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem,
  Radio, RadioGroup, Rating, Select, Slider, TextField, Typography,
} from '@mui/material'

function OrcoForm({ onCreateOrco = () => {} }) {
  const tipos = ["Orco", "Uruk"]
  const categorias = ["Capitán", "Berserker", "Explorador", "Asediador"]

  const [nombre, setNombre] = useState("")
  const [tipo, setTipo] = useState("Orco")
  const [nivel, setNivel] = useState(1)
  const [categoria, setCategoria] = useState("Capitán")
  const [amenaza, setAmenaza] = useState(1)

  const limpiarFormulario = () => {
    setNombre("")
    setTipo("Orco")
    setNivel(1)
    setCategoria("Capitán")
    setAmenaza(1)
  }

  const handleClick = () => {
    const orco = {
      id: crypto.randomUUID(),
      nombre,
      tipo,
      nivel,
      categoria,
      amenaza,
    }
    onCreateOrco(orco)
    limpiarFormulario()
  }

  return (
    <Card raised>
      <CardHeader title="Ingresar Guerrero" />
      <CardContent>
        <div className="row">
          <div className="col-12 col-md-6 mt-3">
            <TextField label="Nombre del guerrero" fullWidth value={nombre}
              onChange={e => setNombre(e.target.value)} />
          </div>
          <div className="col-12 col-md-6 mt-3">
            <FormControl>
              <FormLabel>Tipo de guerrero</FormLabel>
              <RadioGroup row value={tipo}
                onChange={e => setTipo(e.target.value)}>
                {tipos.map((t) =>
                  <FormControlLabel key={t} value={t} control={<Radio />} label={t} />
                )}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <Typography>Nivel de combate: {nivel}</Typography>
            <Slider value={nivel} min={1} max={100} step={1}
              valueLabelDisplay="auto"
              onChange={(e, valor) => setNivel(valor)} />
          </div>
          <div className="col-12 col-md-6 mt-3">
            <FormControl fullWidth>
              <InputLabel id="categoria-label">Categoría / Rango</InputLabel>
              <Select labelId="categoria-label" label="Categoría / Rango"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}>
                {categorias.map((c) =>
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                )}
              </Select>
            </FormControl>
          </div>
          <div className="col-12 mt-3">
            <Typography component="legend">Nivel de amenaza / furia</Typography>
            <Rating value={amenaza}
              onChange={(e, valor) => setAmenaza(valor ?? 1)} />
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} fullWidth variant="outlined"
          color="error">Registrar Guerrero</Button>
      </CardActions>
    </Card>
  )
}

export default OrcoForm