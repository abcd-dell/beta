const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from node js');
});

const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});