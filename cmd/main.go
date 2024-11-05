package main

import (
	"ctsda/server"
	"fmt"
	"log"
	"net/http"
)

func main() {

	// New server struct is initiated
	server := server.NewServer()

	// server is started
	fmt.Println("Server starts at ", server.Address)
	if err := http.ListenAndServe(server.Address, server.Router); err != nil {
		log.Println(err)
	}
}
