// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { useEffect,useState } from 'react'
import NotesTable from 'src/@core/components/notes/NotesTable'
import fetchAPI from 'src/lib/fetchApi'

const MUITable = (props) => {        

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Notes Table' titleTypographyProps={{ variant: 'h6' }} />
            <NotesTable notes={props.notes} />
        </Card>
      </Grid>
    </Grid>
  )
}
MUITable.getInitialProps = async (ctx) => {
  try {
    const res = await fetchAPI('/notes', { method: 'GET' });
    return { notes: res.data };
  } catch (error) {
    console.log(error);
    return { notes: [] }; // fallback value in case of error
  }
};

export default MUITable
