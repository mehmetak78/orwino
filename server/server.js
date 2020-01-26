const express = require("express");
const bodyParser = require("body-parser");


const app = express();


// Body Parser helpers
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const hadnlerAylaraGoreSatis = (req, res) => {

    const reportData = {
        xAxis :  ['Oca.', 'Şub.', 'Mar.', 'Nis.', 'May', 'Haz.', 'Tem.', 'Ağu.', 'Eyl.', 'Eki.', 'Kas.', 'Ara.'],
        data : [15.0, 49.9, 7.0, 23.2, 25.6, 76.7, 135.6, 112.2, 32.6, 20.0, 6.4, 3.3]
    };
    res.json(reportData);
};

// Routes
app.get("/aylaraGoreSatis", hadnlerAylaraGoreSatis);

// Listen port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

