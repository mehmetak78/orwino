import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconHome from '@material-ui/icons/Home';
import IconPersonAdd from '@material-ui/icons/PersonAdd';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import LineChartIcon from "@material-ui/icons/Timeline";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import ScatterChartIcon from "@material-ui/icons/ScatterPlot";
import RadarChartIcon from "@material-ui/icons/RssFeed";
import FunnelChartIcon from "@material-ui/icons/SignalWifi2Bar";
import GaugeChartIcon from "@material-ui/icons/PowerSettingsNew";
import CandleStickChartIcon from "@material-ui/icons/Tune";
import HeatMapChartIcon from "@material-ui/icons/Business";
import PictorialBarChartIcon from "@material-ui/icons/SentimentSatisfied";
import SunBurstChartIcon from "@material-ui/icons/Toll";
import ThemeRiverChartIcon from "@material-ui/icons/Waves";


import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";


const useStyles = makeStyles(theme => ({
    root: {
        height: "90vh"
    },
    navlink: {
        textDecoration: "none",
        color: theme.palette.text.primary
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
}));

const LeftMenu = props => {
    const classes = useStyles();
    const [openCharts, setOpenCharts] = React.useState(false);
    const [openReports, setOpenReports] = React.useState(false);
    const handleClickCharts = () => {
        setOpenCharts(!openCharts);
    };
    const handleClickReports = () => {
        setOpenReports(!openReports);
    };
    return (
        <div className={classes.root}>
            <Fragment>
                <List component="nav">
                    <NavLink to="/home" className={classes.navlink}>
                        <ListItem button key={"FirstPage"} name={"FirstPage"}>
                            <ListItemIcon><IconHome color="primary"/></ListItemIcon>
                            <ListItemText primary="Ana Sayfa"/>
                        </ListItem>
                    </NavLink>
                    <ListItem button onClick={handleClickCharts} className={classes.navlink}>
                        <ListItemIcon>
                            <InboxIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary="Charts"/>
                        {openCharts ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={openCharts} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <NavLink to="/LineCharts" className={classes.navlink}>
                                <ListItem button key={"LineCharts"} className={classes.nested}>
                                    <ListItemIcon><LineChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Line Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/BarCharts" className={classes.navlink}>
                                <ListItem button key={"BarCharts"} className={classes.nested}>
                                    <ListItemIcon><BarChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Bar Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/PieCharts" className={classes.navlink}>
                                <ListItem button key={"PieCharts"} className={classes.nested}>
                                    <ListItemIcon><PieChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Pie Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/ScatterCharts" className={classes.navlink}>
                                <ListItem button key={"ScatterCharts"} className={classes.nested}>
                                    <ListItemIcon><ScatterChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Scatter Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/RadarCharts" className={classes.navlink}>
                                <ListItem button key={"RadarCharts"} className={classes.nested}>
                                    <ListItemIcon><RadarChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Radar Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/FunnelCharts" className={classes.navlink}>
                                <ListItem button key={"FunnelCharts"} className={classes.nested}>
                                    <ListItemIcon><FunnelChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Funnel Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/GaugeCharts" className={classes.navlink}>
                                <ListItem button key={"GaugeCharts"} className={classes.nested}>
                                    <ListItemIcon><GaugeChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Gauge Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/CandleStickCharts" className={classes.navlink}>
                                <ListItem button key={"CandleStickCharts"} className={classes.nested}>
                                    <ListItemIcon><CandleStickChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Candle Stick Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/HeatMapCharts" className={classes.navlink}>
                                <ListItem button key={"HeatMapCharts"} className={classes.nested}>
                                    <ListItemIcon><HeatMapChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Heat Map Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/PictorialBarCharts" className={classes.navlink}>
                                <ListItem button key={"PictorialBarCharts"} className={classes.nested}>
                                    <ListItemIcon><PictorialBarChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Pictorial Bar Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/SunBurstBarCharts" className={classes.navlink}>
                                <ListItem button key={"SunBurstBarCharts"} className={classes.nested}>
                                    <ListItemIcon><SunBurstChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Sun Burst Bar Charts"/>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/ThemeRiverCharts" className={classes.navlink}>
                                <ListItem button key={"ThemeRiverCharts"} className={classes.nested}>
                                    <ListItemIcon><ThemeRiverChartIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Theme River Charts"/>
                                </ListItem>
                            </NavLink>


                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClickReports} className={classes.navlink}>
                        <ListItemIcon>
                            <InboxIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary="Raporlar"/>
                        {openReports ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={openReports} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <NavLink to="/AylaraGoreSatis" className={classes.navlink}>
                                <ListItem button key={"AylaraGoreSatis"} className={classes.nested}>
                                    <ListItemIcon><StarBorder color="primary"/></ListItemIcon>
                                    <ListItemText primary="Aylara Göre Satış Raporu"/>
                                </ListItem>
                            </NavLink>
                        </List>
                    </Collapse>
                </List>
            </Fragment>
        </div>
    );
};

LeftMenu.propTypes = {};

const mapStateToProps = state => (
    {
        layout: state.layout
    }
);

export default connect(mapStateToProps, null)(LeftMenu);
