import sqlite3 from 'sqlite3';

const database = new sqlite3.Database("./database.sqlite");

async function initializeDatabase() {
    await dbRun("DROP TABLE IF EXISTS products");
    await dbRun("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, brand TEXT, description TEXT, price INTEGER) ");

    const products = [
        {
            id: 1,
            name: "Star Wars Millennium Falcon",
            brand: "Lego",
            description: "LEGO - for adults, recommended for ages 18 and up, LEGO® Star Wars series, release year 2024, pack of 921 building blocks",
            price: 23760
        },
        {
            id: 2,
            name: "Speed Champions F1 redbull racecar",
            brand: "Lego",
            description: "LEGO - for adults, recommended for ages 18 and up, LEGO® Star Wars series, release year 2024, pack of 921 building blocks",
            price: 10990
        },
        {
            id: 3,
            name: "harmadik",
            brand: "asdasdsdasdasda",
            description: "asddassdadassda",
            price: 10990
        },

        ];

    for (const product of products) {
        await dbRun("INSERT INTO products (name, brand, description, price) VALUES(?,?,?,?)",[product.name, product.brand, product.description, product.price]);
    }
}


function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        database.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        database.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { database, dbQuery, dbRun, initializeDatabase };