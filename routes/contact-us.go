package routes

import (
	"io"
	"net/http"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "<h1>Contact Page<h1>")
}
