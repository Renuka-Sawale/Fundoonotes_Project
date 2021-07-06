import React from 'react';
import clsx from 'clsx';
import {fade, makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArchiveIcon from '@material-ui/icons/Archive';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import NoteIcon from '@material-ui/icons/Note';
import logo from "../../Assets/Images/logo.png"
import '../Dashboard/dashboard.scss';
import Notes from '../../Components/Notes/Notes';


let iconlist = [
  {
    text: "Notes",
    icon: <NoteIcon />
  },
  {
    text: "Reminders",
    icon: <NotificationsNoneIcon />
  },
  {
    text: "Edit labels",
    icon: <EditSharpIcon />
  },
  {
    text: "Archive",
    icon: <ArchiveIcon />
  },
  {
    text: "Trash",
    icon: <DeleteIcon />
  }
]

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: "-1 !important"
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            // [classes.appBarShift]: open,
          })}
        >
        <Toolbar className="toolbar">
          <div className="left-content">
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton)}
              >
                <MenuIcon />
                
              </IconButton>
            
              <div className="fundoo-image">
                <img src={logo} alt="" />
              </div>
              
              <Typography className="fundoo-text" variant="h6" noWrap>
                Fundoo
              </Typography>
            <div className= "search">
              <div className= "search-icon">
                <SearchIcon />
              </div>
              <InputBase className= "search-text"
                placeholder="Search…"
              />
            </div>
          </div>
          
          <div className="profile">
            <img class="gb_Ca gbii image" src="https://lh3.googleusercontent.com/ogw/ADea4I6j2dahMV2joJcTw6OGDrdDo1m5rnl9Sy0oJ05abQ=s32-c-mo"  alt="" aria-hidden="true" data-noaft=""></img>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
        </div>
        <Divider />
        <List>
          {iconlist.map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItem>
          ))}
        </List>
       <Divider />
      </Drawer>
        <div>
          <Notes/>
        </div>
    </div>
  );
}
