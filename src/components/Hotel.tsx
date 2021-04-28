import React, { useEffect, useState, useContext, useRef } from 'react'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import PoolRoundedIcon from '@material-ui/icons/PoolRounded'
import WifiRoundedIcon from '@material-ui/icons/WifiRounded'
import LocalParkingRoundedIcon from '@material-ui/icons/LocalParkingRounded'
import Box  from '@material-ui/core/Box'
import useStyles from './styles/ClusterStyles'
import { useTheme, Paper, Fade } from '@material-ui/core'

type Images = [
    {
        name: string,
        url: string
    }
]

type Ameneties = [
    {
        id: string,
        name: string
    }
]

interface Props {
    name: string,
    address: string,
    stars: number,
    images: Images,
    amenities: Ameneties,
    refundable: boolean,
    total: number,
    night: number,
    commision: number,
    base: number,
    recommended:boolean
}

const Hotel: React.FC<Props> = ({name, address, stars, images, amenities, refundable, total, night, base, commision, recommended}) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [ wifi, setWifi ] = useState(false)
    const [ spaCompleto, setSpaCompleto ] = useState(false)
    const [ parking, setParking ] = useState(false)
    const [ breakfast, setBreakfast ] = useState(false)
    // const [ imgIndex, setImageIndex ] = useState(0)

    // useEffect(() => {
    //     setInterval(() =>{
    //         if(imgIndex >= 2){
    //             setImageIndex(0)
    //         }else{
    //             setImageIndex(imgIndex + 1)
    //         }
    //     }, 10000)
    // }, [imgIndex])

    useEffect(() => {
        // checkAmenities
        amenities.map((amenitie) => {
            if(amenitie.id === "1073743395"){
                setWifi(true)
            }
            if(amenitie.id === "2123"){
                setSpaCompleto(true)
            }
            if(amenitie.id === "1073742906"){
                setParking(true)
            }
            if(amenitie.id === "2001"){
                setBreakfast(true)
            }
        })
    }, [])

    return (
        <Paper className={classes.paper}>
            <Card className={classes.card}>
                <Typography className={classes.imgContainer} component="div">
                    <CardMedia
                        component='img'
                        alt={images[0]?.name}
                        className={classes.media}
                        title={images[0]?.name}
                        image={images[0]?.url}
                    />
                </Typography>
                <Typography className={classes.amenities} component="div">
                    <Typography className={classes.topDescription} component="div">
                        <Typography className={classes.title}>
                            {name}
                        </Typography>
                        <Typography className={classes.address} component='p'>
                            {address.split(',')[0].toLowerCase()}
                        </Typography>

                        <Grid container alignItems="center" className={classes.grid}>
                            <Rating
                                className={classes.rating}
                                name="read-only" 
                                value={stars} 
                                readOnly
                                size="small"
                                emptyIcon=" "
                            />
                            <Divider className={classes.dividerVertical} orientation="vertical" flexItem />
                            {
                                wifi ? <WifiRoundedIcon fontSize="small" className={classes.wifiLogo} style={{color: '#126AFF'}} /> : null
                            }
                            {
                                spaCompleto ? <PoolRoundedIcon fontSize="small" className={classes.poolLogo} style={{color: '#126AFF'}} /> : null
                            }
                            {
                                parking ? <LocalParkingRoundedIcon fontSize="small" className={classes.parkingLogo} style={{color: '#126AFF'}} /> : null
                            }
                        </Grid>

                    </Typography>
                    <Typography className={classes.included} component='div'>
                        {
                            recommended ? <Box fontSize="small" color="primary" className={classes.recommended} textAlign="left">recomendado</Box> : null
                        }
                        {
                            breakfast ? <Box fontSize="small" color="primary" className={classes.breakfast} textAlign="left">Desayuno incluido</Box>: null
                        }
                        {
                            refundable ? <Box fontSize="small" color="primary" className={classes.refaundable} textAlign="left">No reembolsable</Box>: null
                        }
                    </Typography>
                </Typography>

                <Divider className={classes.divider} />

                <Typography className={classes.price} component='div'>
                    <Typography className={classes.typographyOff} component="div">
                        <Typography className={classes.totalText} component="p">
                            Total final
                        </Typography>
                        <Box fontSize="small" color="primary" textAlign="right" className={classes.offPercent} >{(100*(night + base + commision)/total).toFixed(0)}% OFF</Box>
                    </Typography>
                    
                    <Typography className={classes.stay} component='p'>
                        6 noches, 2 personas
                    </Typography>

                    <Typography className={classes.total} component="div">
                        <Typography className={classes.currency} component="p">
                            ARS
                        </Typography>
                        {/* new Intl.NumberFormat().format(total) da formato de "currency" al numero y el split(',')[0] se queda sin la parte decimal  */}
                        {new Intl.NumberFormat().format(total).split(',')[0]}
                    </Typography>

                    <Typography className={classes.imp} component="p">
                        impuestos y tasas incluidas
                    </Typography>

                    <Button className={classes.button} variant="contained" color="primary">
                        ver hotel
                    </Button>
                </Typography>
            </Card>
        </Paper>
    )
}

export default Hotel
