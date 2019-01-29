require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const port = process.env.SERVER_PORT || 3005;
const cors = require('cors');
const app = express();

app.use(cors());

app.use(json());

const path = require('path'); // Usually moved to the start of file

// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.use(express.static(`${__dirname}/../build` ));

app.listen(port, () => {
  console.log(`Server is UP and listening on port ${ port }`);
});