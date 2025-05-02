const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'earist'
});

db.getConnection((err) => {
    if (err){
        console.error('Error connecting to the database:', err);
    } else{
        console.log('Connected to the database');

    }
});

app.get('/api/data', (req, res) => {
    db.query("SELECT * FROM cor", (err, results) => {
        if(err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

 useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);
  
app.use(cors({
    origin: 'http://localhost:3000'
  }));

 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});