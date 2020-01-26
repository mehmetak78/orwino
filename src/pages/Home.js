import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";

const Home = (props) => {

    const formName = "Home";

    return (
        <Fragment>
            <Typography variant="h4">
                {formName}
            </Typography>

        </Fragment>
    );
};

function mapDispatchToProps() {
    return {}
}

export default connect(null, mapDispatchToProps())(Home);
