package main

import (
	"ctsda/server"
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/mattn/go-sqlite3"
)

func init() {
	db, err := sql.Open("sqlite3", "data/bbnu.db")
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v\n", err)
	}
	if err = db.Ping(); err != nil {
		log.Fatalf("Not pinging...: %v", err)
	}
	defer db.Close()

	createTableQuery := `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		age INTEGER
	);`
	_, err = db.Exec(createTableQuery)
	if err != nil {
		log.Fatalf("Failed to create table: %v", err)
	}

}

func main() {

	// Insert a record
	// insertQuery := `INSERT INTO users (name, age) VALUES (?, ?)`
	// _, err = db.Exec(insertQuery, "Alice", 25)
	// if err != nil {
	// 	log.Fatalf("Failed to insert record: %v", err)
	// }

	// Query records
	// query := `SELECT id, name, age FROM users`
	// rows, err := db.Query(query)
	// if err != nil {
	// 	log.Fatalf("Failed to query records: %v", err)
	// }
	// defer rows.Close()

	// fmt.Println("Users:")
	// for rows.Next() {
	// 	var id int
	// 	var name string
	// 	var age int
	// 	err = rows.Scan(&id, &name, &age)
	// 	if err != nil {
	// 		log.Fatalf("Failed to read row: %v", err)
	// 	}
	// 	fmt.Printf("ID: %d, Name: %s, Age: %d\n", id, name, age)
	// }

	// // Check for errors from iterating over rows
	// if err = rows.Err(); err != nil {
	// 	log.Fatalf("Row iteration error: %v", err)
	// }

	// New server struct is initiated

	server := server.NewServer()

	// server is started
	fmt.Println("Server starts at ", server.Address)
	if err := http.ListenAndServe(server.Address, server.Router); err != nil {
		log.Println(err)
	}
}
