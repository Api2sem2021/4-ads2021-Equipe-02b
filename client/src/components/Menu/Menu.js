import React from 'react';
import { Link } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import '../Menu/Menu.css';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        marginLeft: '-5px'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(8) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(10) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    icons: {
        width: '50px',
        height: '50px'
    },
    text: {
        marginLeft: '7px',
        color: "#6D6D6D",
    }

}));

export default function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const activeIcon = () => {

    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Sisatas
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Typography>
                        <Link href='' underline='none'>
                            <ListItem button key='home'>
                                <ListItemIcon ><NotificationsNoneOutlinedIcon className={classes.icons} onClick={activeIcon} /></ListItemIcon>
                                <ListItemText primary='Home/Atualizações' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href='new-record' underline='none'>
                            <ListItem button key='new-record'>
                                <ListItemIcon><PostAddOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Nova Ata' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="show-records" underline='none'>
                            <ListItem button key='show-records'>
                                <ListItemIcon><AssignmentOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Exibir Atas' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="reports" underline='none'>
                            <ListItem button key='reports'>
                                <ListItemIcon><AssessmentOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Relatórios' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="profile" underline='none'>
                            <ListItem button key='profile'>
                                <ListItemIcon><AccountCircleOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Perfil de Usuário' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="users-list" underline='none'>
                            <ListItem button key='users-list'>
                                <ListItemIcon><PeopleAltOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Usuários Cadastrados' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="exit" underline='none'>
                            <ListItem button key='exit'>
                                <ListItemIcon><ExitToAppOutlinedIcon className={classes.icons} /></ListItemIcon>
                                <ListItemText primary='Sair' className={classes.text} />
                            </ListItem>
                        </Link>
                    </Typography>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}