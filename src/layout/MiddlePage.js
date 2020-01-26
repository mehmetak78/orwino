import React from 'react';
import {Switch, Route} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import {makeStyles} from "@material-ui/core/styles";
import Bar1 from "../components/charts/BarCharts/Bar1";
import BarChartsPage from "../pages/ChartsPages/BarChartsPage";
import LineChartsPage from "../pages/ChartsPages/LineChartsPage";
import PieChartsPage from "../pages/ChartsPages/PieChartsPage";
import ScatterChartsPage from "../pages/ChartsPages/ScatterChartsPage";
import RadarChartsPage from "../pages/ChartsPages/RadarChartsPage";
import FunnelChartsPage from "../pages/ChartsPages/FunnelChartsPage";
import GaugeChartsPage from "../pages/ChartsPages/GaugeChartsPage";
import CandleStickChartsPage from "../pages/ChartsPages/CandleStickChartsPage";
import HeatMapChartsPage from "../pages/ChartsPages/HeatMapChartsPage";
import PictorialBarChartsPage from "../pages/ChartsPages/PictorialBarChartsPage";
import SunBurstChartsPage from "../pages/ChartsPages/SunBurstChartsPage";
import ThemeRiverChartsPage from "../pages/ChartsPages/ThemeRiverChartsPage";
import Report1Page from "../pages/ReportPages/Report1Page";


const useStyles = makeStyles(theme => ({
    root: {
        height: "90vh"

    },
}));

const MiddlePage = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/LineCharts" component={LineChartsPage}/>
                <Route exact path="/BarCharts" component={BarChartsPage}/>
                <Route exact path="/PieCharts" component={PieChartsPage}/>
                <Route exact path="/ScatterCharts" component={ScatterChartsPage}/>
                <Route exact path="/RadarCharts" component={RadarChartsPage}/>
                <Route exact path="/FunnelCharts" component={FunnelChartsPage}/>
                <Route exact path="/GaugeCharts" component={GaugeChartsPage}/>
                <Route exact path="/CandleStickCharts" component={CandleStickChartsPage}/>
                <Route exact path="/HeatMapCharts" component={HeatMapChartsPage}/>
                <Route exact path="/PictorialBarCharts" component={PictorialBarChartsPage}/>
                <Route exact path="/SunBurstBarCharts" component={SunBurstChartsPage}/>
                <Route exact path="/ThemeRiverCharts" component={ThemeRiverChartsPage}/>
                <Route exact path="/AylaragoreSatis" component={Report1Page}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
};

MiddlePage.propTypes = {};

export default MiddlePage;
