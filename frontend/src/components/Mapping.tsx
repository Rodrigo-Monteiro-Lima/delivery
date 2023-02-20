import { Button, Grid, MenuItem, Select } from '@material-ui/core'
import { FunctionComponent, useState, useEffect } from 'react'
import { Route } from '../util/model';

const API_URL = process.env.REACT_APP_API_URL;

const Mapping: FunctionComponent = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [routeIdSelected, setRouteIdSelected] = useState<string>("");
  useEffect(() => {
    fetch(`${API_URL}/routes`)
      .then((data) => data.json())
      .then((data) => setRoutes(data));
  }, [])
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
      <form>
          <Select
            fullWidth
            displayEmpty
            value={routeIdSelected}
            onChange={(event) => setRouteIdSelected(event.target.value + "")}
          >
            <MenuItem value="">
              <em>Selecione uma corrida</em>
            </MenuItem>
            {routes.map((route, key) => (
              <MenuItem key={key} value={route._id}>
                {route.title}
              </MenuItem>
            ))}
          </Select>
          <div>
            <Button type="submit" color="primary" variant="contained">
              Iniciar uma corrida
            </Button>
          </div>
        </form>
      </Grid>
      <Grid item xs={12} sm={9}>Mapping</Grid>
    </Grid>
  )
}

export default Mapping
