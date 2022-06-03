const { Client } = require('pg')

export const client = new Client({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "stone"
})

client.connect()

.then(() => console.log("Connected successfuly"))

const query = {
    text: 'SELECT * FROM ton_users',
}

// callback
client.query(query, (err, res) => {
    if (err) {

        console.log(err.stack)

    } else {

        console.log(res.rows) 

    }
    client.end()
  })
