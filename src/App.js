import './App.css';
import React, {useState} from "react";

import {
    AppBar,
    Container,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Button,
    Paper,
    Grid,
    Card,
    CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction,
} from "@material-ui/core";

import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backGroudPostion: "center"
    },
    mainFeaturePostContent: {
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(10),
    },
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,.9)"
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
    const classes = useStyles();
    const [value, setValue] = useState("recents")
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div>
            <AppBar postion="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge={'start'} className={classes.menuButton} color={'inherit'}
                                    aria-label={'menu'}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant={'h6'} className={classes.title}>WebGeo</Typography>
                        <Box mr={3}>
                            <Button color={'inherit'} variant={'outlined'}>Log in</Button>
                        </Box>
                        <Button color={'secondary'} variant={'contained'}>Sign up</Button>

                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturePostContent}>
                                    <Typography component={"h1"} variant={"h3"} color={"inherit"} gutterBottom>

                                        WebGeo
                                    </Typography>
                                    <Typography component={"h5"} color={"inherit"} paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
                                        dicta ea eaque earum iste magnam, magni, minus quibusdam quisquam recusandae
                                        sapiente temporibus tenetur ut.
                                    </Typography>
                                    <Button variant={'contained'} color={'secondary'}>
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainConten}>
                    <Container maxWidth={'md'}>
                        <Typography variant={'h2'} align={'center'} color={'textPrimary'} gutterBottom>
                            WebGeo
                        </Typography>
                        <Typography variant={'h5'} align={'center'} color={'textSecondary'} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, atque consectetur
                            consequatur dolorem ea eum illum inventore magni modi molestiae nulla numquam odio odit
                            quaerat quisquam repellat sequi sint voluptate.
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={5} justify={'center'}>
                                <Grid item>
                                    <Button variant={"contained"} color={'primary'}>Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={"outlined"} color={'primary'}>Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth={'md'}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia}
                                               image={"https://source.unsplash.com/random"} title={"image title"}/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant={"h5"} gutterBottom>Blog Post</Typography>
                                        <Typography>Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Architecto, atque consectetur
                                            consequatur dolorem ea eum</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size={"small"} color={"Primary"}>
                                            View
                                        </Button>
                                        <Button size={"small"} color={"Primary"}>
                                            Edit
                                        </Button>
                                        <LayerIcon/>
                                        <PlayCircleFilledIcon/>

                                    </CardActions>

                                </Card>
                            </Grid>

                        ))}
                    </Grid>

                </Container>
            </main>
            <footer>
                <Typography variant={"h6"} align={"center"} gutterBottom>Footer</Typography>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction label={"Recents"} value={"recents"} icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label={"Favorites"} value={"favorites"} icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label={"Nearby"} value={"nearby"} icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction label={"Folder"} value={"folder"} icon={<FolderIcon/>}/>
                </BottomNavigation>
                <Typography align={'center'} color={"textSecondary"} component={"p"} variant={"subtitle1"}>
                    Web Geo React js Material Ui site for portfolio
                </Typography>

            </footer>
        </div>
    );
}

export default App;
