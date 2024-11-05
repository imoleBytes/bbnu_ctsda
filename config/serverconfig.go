package config

import "fmt"

// let this values come from env variables
var HOST = "localhost"
var PORT = "5000"

var SERVER_ADDRESS = fmt.Sprintf("%s:%s", HOST, PORT)
