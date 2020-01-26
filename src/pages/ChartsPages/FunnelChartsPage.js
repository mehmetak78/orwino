import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import Funnel1 from '../../components/charts/FunnelCharts/Funnel1';
import Funnel2 from '../../components/charts/FunnelCharts/Funnel2';
import Funnel3 from '../../components/charts/FunnelCharts/Funnel3';

import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../components/charts/ChartsPageStyles";



class FunnelChartsPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Funnel Charts
                </Typography>
                <QueueAnim type="scale" duration={900}>
                    <div key={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Funnel1/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Funnel2/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Funnel3/>
                            </CardContent>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default withStyles(styles)(FunnelChartsPage);
