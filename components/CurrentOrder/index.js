import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    pay: {
        marginTop: theme.spacing(2)
    },
    badge: {
        marginLeft: theme.spacing(3)
    },
    title: {
        marginBottom: theme.spacing(1)
    }
}))

export default function UserPointsCard() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Typography className={classes.title} component="h2" variant="h6" color="primary" gutterBottom>
                Sua conta atual <Chip className={classes.badge} size="small" label="Pendente" />
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Typography>Mês:</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Janeiro/2020</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography>Vencimento:</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>10/11/2020</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography>Valor:</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>R$ 85,00</Typography>
                </Grid>
            </Grid>
            <Button variant="outlined" className={classes.pay}>Pagar</Button>
        </React.Fragment>
    )
}
