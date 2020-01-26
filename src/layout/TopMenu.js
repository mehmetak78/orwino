import React, {Fragment} from 'react';

import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const TopMenu = (props) => {
    return (
        <Fragment>
            <Card >
                <CardContent>
                    <Typography variant="h1">
                        Orwino
                    </Typography>
                </CardContent>
            </Card>

        </Fragment>
    );
};

export default TopMenu;
