import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card:{
            width: 256,
            marginBottom: 32,
            paddingBottom: 32,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up(960)]: {
                minWidth: 992,
                height: 232,
                flexDirection: 'row',
                paddingBottom: 0
            }
        },
        paper:{
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
        },
        button:{
            width:224,
            margin: 'auto',
            [theme.breakpoints.up(960)]:{
                marginTop: 70
            }
        },
        imgContainer:{
            [theme.breakpoints.up(960)]: {
                width: 200,
                height: '100%',
            }
        },
        media: {
            height: 140,
            // paddingTop: '56.25%',
            [theme.breakpoints.up(960)]: {
                width: 200,
                height: 232,
                display: 'flex',
                backgroundSize: 'cover',
                paddingTop: 0,
            }
        },
        title: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: "24px",
            letterSpacing: 0.15,
            marginLeft: 16,
            marginTop: 16,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: 200,
            [theme.breakpoints.up(960)]:{
                width: 'auto',
            }
        },
        address: {
            fontSize:14,
            lineHeight: "16px",
            letterSpacing: '0.15px',
            marginBottom:8,
            marginLeft: 16,
            textTransform: 'capitalize',
        },
        dividerVertical: {
            width: 15,
            height: 1,
            transform: 'rotate(90deg)',
            transformOrigin: 'left'
        },
        divider:{
            marginTop: 8,
            marginBottom: 8,
            [theme.breakpoints.up(960)]:{
                width: 1,
                height: 232,
                position: 'absolute',
                right: 260,
                marginTop: 0,
                marginBottom: 0,
            }
        },
        rating: {
            marginRight:8,
            marginLeft: 16,
            '& span': {
                fontSize: '0.8rem'
            }
        },
        grid:{
            marginTop: 8,
            marginBottom: 16,
            [theme.breakpoints.up(960)]:{
                height: 16,
            }
        },
        wifiLogo:{
            fontSize: '1rem',
            marginRight: 8
        },
        poolLogo:{
            fontSize: '1rem',
            marginRight: 8
        },
        parkingLogo:{
            fontSize: '1rem'
        },
        amenities:{
            [theme.breakpoints.up(960)]:{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }
        },
        recommended:{
            backgroundColor:'rgba(74, 129, 226, 0.15)',
            color:'#4A81E2',
            fontSize: 12,
            width: 75,
            lineHeight: '16px',
            letterSpacing: '0.13px',
            paddingLeft: 8,
            paddingRight: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
            marginLeft: 16,
            marginBottom: 8,
            [theme.breakpoints.up(960)]:{
                width: 'auto',
            }
        },
        breakfast: {
            backgroundColor:'rgba(87, 155, 8, 0.15)',
            color:'#579B08',
            fontSize: 12,
            width: 101,
            lineHeight: '16px',
            letterSpacing: '0.13px',
            paddingLeft: 8,
            paddingRight: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
            marginLeft: 16,
            marginBottom: 8,
            [theme.breakpoints.up(960)]:{
                width: 'auto',
            }
        },
        refaundable:{
            backgroundColor:'rgba(208, 2, 27, 0.1)',
            color:'#D0021B',
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: '0.13px',
            paddingLeft: 8,
            marginLeft: 16,
            paddingRight: 8,
            width:93,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
            marginBottom: 8,
        },
        typographyOff:{
            display: 'inline-flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 600,
            fontSize: 18,
            marginTop:8,
            lineHeight: "24px",
            letterSpacing: '0.15px',
        },
        currency:{
            fontSize: 12,
            marginRight: 8,
            fontWeight: 600
        },
        offPercent:{
            backgroundColor:'#579B08',
            color: 'white',
            fontSize: 12,
            lineHeight: '16px',
            alignItems: 'center',
            borderRadius: 4,
            paddingRight: 8,
            paddingLeft: 8,
            letterSpacing: '0.126px',
            fontWeight: 400,
            marginRight: 16
        },
        totalText:{
            marginTop:0,
            marginBottom:0,
            marginLeft: 16,
            fontWeight: 600,
            [theme.breakpoints.up(960)]:{
                marginLeft: 0
            }
        },
        stay: {
            fontWeight: 400,
            fontSize: 12,
            lineHeight: '16px',
            display: 'flex',
            marginLeft: 16,
            marginTop:0,
            marginBottom: 0,
            [theme.breakpoints.up(960)]:{
                marginLeft: 0
            }
        },
        total:{
            fontWeight: 600,
            marginTop: 8,
            marginBottom: 8,
            marginLeft: 16,
            fontSize: 18,
            lineHeight: '24px',
            letterSpacing: '0.15px',
            display: 'inline-flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            [theme.breakpoints.up(960)]:{
                marginLeft: 0
            }
        },
        imp:{
            marginBottom: 64,
            marginTop:0,
            marginLeft: 16,
            fontSize: 12,
            [theme.breakpoints.up(960)]:{
                marginBottom: 0,
                marginLeft: 0
            }
        },
        price:{
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up(960)]: {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                position:'absolute',
                right: 20,
                marginTop: 8
            }
        },
        included:{
            [theme.breakpoints.up(960)]:{
                display: 'inline-flex',
                marginBottom: 8
            }
        },
        topDescription: {
            [theme.breakpoints.up(960)]:{
                display: 'flex',
                flexDirection: 'column',
            }
        }
    })
)

export default useStyles