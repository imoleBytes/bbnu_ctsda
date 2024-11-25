package storage

import (
	"database/sql"
	"log"
)

func GetInstitutions() ([]Institution, error) {
	db, err := getDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	queryNetworks := `SELECT id, name, image_url, description FROM institutions;`
	rows, err := db.Query(queryNetworks)
	if err != nil {
		log.Printf("Failed to query Institutions: %v", err)
		return nil, err
	}
	defer rows.Close()

	institutes := []Institution{}

	for rows.Next() {
		var institute Institution
		err = rows.Scan(&institute.Id, &institute.Name, &institute.ImageUrl, &institute.Description)
		if err != nil {
			log.Printf("Failed to read row: %v", err)
			return nil, err
		}

		institutes = append(institutes, institute)
	}
	return institutes, nil
}

type Institution struct {
	Id          string
	Name        string
	ImageUrl    string
	Description string
}

func getDB() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "data/bbnu.db")
	if err != nil {
		log.Printf("Failed to connect to the database: %v\n", err)
		return nil, err
	}
	if err = db.Ping(); err != nil {
		log.Printf("Not pinging...: %v", err)
		return nil, err
	}
	return db, nil
}

func SetupDB() {
	db, err := getDB()
	if err != nil {
		log.Fatalf("Unable to setup DB: %v\n", err)
	}
	defer db.Close()

	// CREATE USERS TABLE
	createTableQuery := `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		first_name TEXT NOT NULL,
		last_name TEXT NOT NULL
	);`
	_, err = db.Exec(createTableQuery)
	if err != nil {
		log.Fatalf("Failed to create users table: %v", err)
	}

	// CREATE INSTITUTIONS TABLE

	// EDIT HERE BELOW!!!!!!!!!!!!!!

	createTableQuery = `
	CREATE TABLE IF NOT EXISTS institutions (
		id TEXT PRIMARY KEY,
		name TEXT NOT NULL,
		me TEXT NOT NULL
	);`
	_, err = db.Exec(createTableQuery)
	if err != nil {
		log.Fatalf("Failed to create users table: %v", err)
	}
	// EDIT INSTITUIONS!!!!!!!!!
}
