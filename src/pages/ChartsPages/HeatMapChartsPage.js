import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import HeatMap1 from '../../components/charts/HeatMapCharts/HeatMap1';
import HeatMap2 from '../../components/charts/HeatMapCharts/HeatMap2';

import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../components/charts/ChartsPageStyles";



class HeatMapChartsPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Heat Map Charts
                </Typography>
                <QueueAnim type="scale" duration={900}>
                    <div key={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <HeatMap1/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className={classes.card}>
                            <CardContent>
                                <HeatMap2/>
                            </CardContent>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default withStyles(styles)(HeatMapChartsPage);
