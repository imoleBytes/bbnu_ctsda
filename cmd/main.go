package main

import (
	"ctsda/db"
	"ctsda/server"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func init() {
	godotenv.Load() // load .env file
	// initialize db here!!!!
	setup := os.Getenv("INITIALIZE_DATABASE")
	if setup == "true" {
		db.SetupDB()
	}
}

func main() {
	// New server struct is initiated

	server := server.NewServer()

	// server is started
	fmt.Println("Server starts at ", server.Address)
	if err := http.ListenAndServe(server.Address, server.Router); err != nil {
		log.Println(err)
	}
}
