import { Button, Grid, MenuItem, Select } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const Mapping: FunctionComponent = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
      <form>
          <Select
            fullWidth
            // displayEmpty
          >
            <MenuItem value="aaa">
              Selecione uma corrida
            </MenuItem>
            <MenuItem>
              Primeiro
            </MenuItem>
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