const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Example API route
app.get('/api/example', (req, res) => {
  res.json({ message: 'API is working' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


