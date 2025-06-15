const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Main API endpoint
app.post('/api/sort-string', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data || typeof data !== 'string') {
      return res.status(400).json({ error: 'Invalid input' });
    }
    
    const sortedChars = data.split('').sort();
    res.json({ word: sortedChars });
    
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Mutshidzi\'s API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
