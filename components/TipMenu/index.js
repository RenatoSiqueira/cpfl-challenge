import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Filter2Icon from '@material-ui/icons/Filter2'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import EmailIcon from '@material-ui/icons/Email'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
    box: {
        flex: 1
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: '5em',
        borderColor: theme.palette.secondary.main,
        borderWidth: 1
    }
}))

export default function UserPointsCard() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid spacing={1} container direction="column" justify="center" alignItems="center" className={classes.box}>
                <Grid spacing={2} container justify="center" alignItems="flex-start">
                    <Grid item xs={4} container direction="column" justify="center" alignItems="center">
                        <IconButton
                            color="inherit"
                            className={classes.button}
                        >
                            <Filter2Icon fontSize="large" />
                        </IconButton>
                        <Typography textAlign="center">2 via de conta</Typography>
                    </Grid>
                    <Grid item xs={4} container direction="column" justify="center" alignItems="center">
                        <IconButton
                            className={classes.button}
                        >
                            <EmojiObjectsIcon fontSize="large" />
                        </IconButton>
                        <Typography textAlign="center">Comunicar falta de energia</Typography>
                    </Grid>
                    <Grid item xs={4} container direction="column" justify="center" alignItems="center">
                        <IconButton
                            className={classes.button}
                        >
                            <EmailIcon fontSize="large" />
                        </IconButton>
                        <Typography textAlign="center">Receber conta por email</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
