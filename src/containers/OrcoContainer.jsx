import { useState } from 'react'
import OrcoForm from '../components/OrcoForm'
import OrcoView from '../components/OrcoView'

function OrcoContainer() {
  const [orcos, setOrcos] = useState([])

  const handleCreate = (orco) => {
    setOrcos([...orcos, orco])
  }

  const handleDelete = (orco) => {
    const filtrada = orcos.filter((o) => o.id !== orco.id)
    setOrcos(filtrada)
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <OrcoForm onCreateOrco={handleCreate} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <OrcoView orcos={orcos} onQuitar={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default OrcoContainer