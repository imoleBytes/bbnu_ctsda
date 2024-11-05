package routes

import (
	"io"
	"net/http"
)

func Services(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "<h1>Services Page<h1>")
}
