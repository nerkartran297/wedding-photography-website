const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/rent2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rent1.html'));
});

app.get('/rent2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rent2.html'));
});

app.get('/rent3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rent3.html'));
});

app.get('/rent4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rent4.html'));
});

app.get('/gallery1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'album1.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
