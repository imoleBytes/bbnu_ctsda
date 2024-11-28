package utils

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
)

func GenerateCode(id string) (string, error) {
	db := getDB()
	defer db.Close()

	query := `SELECT ctsda_code from institutions WHERE id = ?;`

	row := db.QueryRow(query, id)
	var code string
	err := row.Scan(&code)
	if err != nil {
		if err == sql.ErrNoRows {
			err = errors.New("no Institute with id: " + id)
			return "", err
		}
		log.Fatalf("error scanning value into code string: %v\n", err)
	}
	if code != "nil" {
		return "", errors.New("Institute has CTSDA Code already: " + code)
	}
	code = generateCode()
	db.Exec("UPDATE institutions SET ctsda_code = ? WHERE id = ?;", code, id)
	return code, nil
}

func generateCode() string {
	db := getDB()
	defer db.Close()
	row := db.QueryRow("SELECT last_number_from_code FROM stats;")

	var lastNum int
	_ = row.Scan(&lastNum)

	lastNum += 1

	db.Exec("UPDATE stats SET last_number_from_code = ?;", lastNum)

	var year int = 2025 // a library should dynamically get the year here!
	return fmt.Sprintf("CTSDA/US/%d/%d", year, lastNum)
}

func getDB() *sql.DB {
	db, err := sql.Open("sqlite3", "data/bbnu.db")
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v\n", err)
	}
	if err = db.Ping(); err != nil {
		log.Printf("Not pinging...: %v", err)
		return nil
	}
	return db
}
