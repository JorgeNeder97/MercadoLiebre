const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rutasMain = require('./routes/main');

app.use(express.static('public'));

app.use('/', rutasMain);

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
