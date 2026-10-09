import {
  Alert, Button, Chip, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
} from '@mui/material'

function OrcoView({ orcos = [], onQuitar = () => {} }) {

  if (!orcos?.length) {
    return <Alert severity="info">Aún no hay tropas desplegadas.</Alert>
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Categoría</TableCell>
            <TableCell>Nivel</TableCell>
            <TableCell>Clasificación</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orcos.map((g) =>
            <TableRow key={g.id}>
              <TableCell>{g.nombre}</TableCell>
              <TableCell>{g.tipo}</TableCell>
              <TableCell>{g.categoria}</TableCell>
              <TableCell>{g.nivel}</TableCell>
              <TableCell>
                <Chip label={g.tipo} color={g.tipo === "Orco" ? "success" : "error"} />
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="error"
                  onClick={() => onQuitar(g)}>
                  Asesinado por la aparición
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrcoView