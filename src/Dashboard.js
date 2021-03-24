import { Card, CardActions, CardContent, Container, MenuItem, Select, Slider, Switch, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useState } from 'react'
import './DashboardStyle.css'


const useStyle = makeStyles( theme => ({
    // root: {
    //     marginTop: theme.spacing(15),
    //     display: 'flex',
    //     flexDirection: 'column',
    //     maxWidth: '1024px'
    // },
    
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    card: {
        maxWidth: '205px',
        marginTop: theme.spacing(2)
    },
    
}))

const Dashboard = () => {

    const [isOnline, setOnline] = useState(true)
    const [volLevel, setVolLevel] = useState(0)
    const [soundQuality, setQuality] = useState('2')
    const [errLogs, seterrLogs] = useState([])

    const warningMessages = {

        'isOnline': "Your application is offline. You won't be able to share or stream music to other devices.",
        'volLevel': "Listening to music at a high volume could cause long-term hearing loss.",
        'soundQuality': "Music quality is degraded. Increase quality if your connection allows it."
    
    }

    useEffect(() =>{
    let onlineIndex = errLogs.indexOf(warningMessages.isOnline)

        if (!isOnline) {
            if (onlineIndex === -1) {
                seterrLogs([...errLogs, warningMessages.isOnline])
            }
        } else {
            if (onlineIndex  > -1) {
                let errorLists = errLogs.filter( item => item !== warningMessages.isOnline)
                seterrLogs(errorLists)
            }
        }
    },[isOnline])

    useEffect(() => {

        let qualityIndex = errLogs.indexOf(warningMessages.soundQuality)

        if (soundQuality == 1) {
            if (qualityIndex === -1) {
                seterrLogs([...errLogs, warningMessages.soundQuality])
            }
        } else {
            if (qualityIndex > -1) {
                let errorLists = errLogs.filter( item => item !== warningMessages.soundQuality)
                seterrLogs(errorLists)
            }
        }
    },[ soundQuality])

    useEffect(() => {
        let volumeIndex = errLogs.indexOf(warningMessages.volLevel)

        if (volLevel >= 80) {
            if (volumeIndex === -1) {
                seterrLogs([...errLogs, warningMessages.volLevel])
            }
        } else {
            if (volumeIndex > -1) {
                let errorLists = errLogs.filter( item => item !== warningMessages.volLevel)
                seterrLogs(errorLists)
            }
        }
    },[volLevel])


    const handleSwitch = (e) => {
        e.target.checked ? setOnline(true) : setOnline(false)
    }

    const handleVolume = (e, newValue) => {
        setVolLevel(newValue)
    }

    const handleQuality = (e) => {
        setQuality(e.target.value)
    }

    const classes = useStyle()

    return (
        <Container className= 'maincontainer' >
            <Container className={classes.box}>
                        <ul>
                            {errLogs.map( (msg, index) => {
                                return <li className='errormessage' key={index}>{msg}</li>
                            })}
                        </ul>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant='h5'>
                                Online Mode
                            </Typography>
                            <Typography variant='body2'>
                                Is this application connected to the internet?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Switch checked={isOnline} onChange={handleSwitch} />
                        </CardActions>
                    </Card>


                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant='h5'>
                                Master Volume
                            </Typography>
                            <Typography variant='body2'>
                                Overrides all other sound settings in this application
                            </Typography>
                        </CardContent>
                                <CardActions>
                                    <Slider
                                    value={volLevel}
                                    valueLabelDisplay='auto'
                                    step={10}
                                    marks
                                    min={0}
                                    max={100}
                                    onChange={handleVolume}
                                    />
                                </CardActions>
                    </Card>


                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant='h5'>
                                Sound Quality
                            </Typography>
                            <Typography variant='body2'>
                                Manually control the music quality in the event of poor connection
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Select onChange={handleQuality} value={soundQuality} fullWidth>
                                <MenuItem value='2'>Normal</MenuItem>
                                <MenuItem value='3'>High</MenuItem>
                                <MenuItem value='1'>Low</MenuItem>
                            </Select>
                        </CardActions>
                    </Card>

                    
            </Container>            
        </Container>
    )
}


export default Dashboard