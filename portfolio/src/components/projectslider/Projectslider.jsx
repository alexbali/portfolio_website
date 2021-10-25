import "./projectslider.scss"
import Card from "../card/Card"
import Projectcard from "../projectcard/Projectcard"
// import ResponsiveCarouselComponent from "./components/responsive-carousel.component";
import { makeStyles, Grid, Paper} from "@material-ui/core"



export default function Projectslider() {

    const useStyles = makeStyles((theme) => ({
        grid: {
            width: '100%',
            height: '100%',
            margin: '10px',
            // rowHeight: '200px'
        },

        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            background: theme.palette.success.light
        }
    }));

    return (
        <div className="projectslider">
            <h1>Projects</h1>
            <div className="grid-container">
            {/* <Grid container spacing={2} className="classes.grid" >
                <Grid item xs={12} md={4}>
                    <Paper>
                    <Card image="assets/dev.png" title="Development"></Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>
                    <Card image="assets/dev.png" title="Development"></Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>
                    <Card image="assets/dev.png" title="Development"></Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                    <Card image="assets/dev.png" title="Development"></Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                    <Card image="assets/dev.png" title="Development"></Card>
                    </Paper>
                </Grid>
            </Grid> */}
                <Projectcard image="assets/CitrusNetwork.png" title="CitrusNetwork"></Projectcard>
                <Projectcard image="assets/dev.png" title="CitrusNetwork"></Projectcard>
                <Projectcard></Projectcard>
                <Projectcard></Projectcard>
            
            

            </div>
        </div>
    )
}