// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { useEffect,useState } from 'react'
import NotesTable from 'src/@core/components/notes/NotesTable'
import { set } from 'nprogress'


const MUITable = () => {
    const url = 'http://localhost:5000/api/v1/notes';
    const [notes, setNotes] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(res=>{
            setNotes(res.data)
        })
        .catch(error =>{
            console.log(error);
        })
    },[])        

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Notes Table' titleTypographyProps={{ variant: 'h6' }} />
          {
            notes&&<NotesTable notes={notes} />

          }
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
