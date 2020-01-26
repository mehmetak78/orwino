import React, {useState} from 'react';
import QueueAnim from 'rc-queue-anim';
import Report1 from '../../components/reports/Report1'

import axios from "axios";

import {Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../components/charts/ChartsPageStyles";
import Button from "@material-ui/core/Button";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker, DatePicker,
} from '@material-ui/pickers';
import Grid from "@material-ui/core/Grid";


const BarChartsPage = (props) => {

    const initialData = {
        xAxis: [],
        data: []
    };

    const [reportData, setReportData] = useState(initialData);
    const [startDate, setStartdDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const handleStartDateChange = date => {
        setStartdDate(date);
    };

    const handleEndDateChange = date => {
        setEndDate(date);
    };
    const handleClick = async () => {
        let res = await axios.get("/aylaraGoreSatis");
        let data = res.data;
        setReportData(data);
    };

    const {classes} = props;

    return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <DatePicker
                            views={["year", "month"]}
                            label="Başlangıç"
                            minDate={new Date("2019-01-01")}
                            maxDate={new Date("2025-01-01")}
                            value={startDate}
                            onChange={handleStartDateChange}
                        />
                        <DatePicker
                            views={["year", "month"]}
                            label="Bitiş"
                            minDate={new Date("2019-01-01")}
                            maxDate={new Date("2025-01-01")}
                            value={endDate}
                            onChange={handleEndDateChange}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <div className={classes.appBarSpacer}/>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Raporu Oluştur
                </Button>
                <QueueAnim type="scale" duration={900}>
                    <div key={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Report1 xAxis={reportData.xAxis} data={reportData.data}/>
                            </CardContent>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
    );
};

export default withStyles(styles)(BarChartsPage);
