package routes

import (
	"io"
	"net/http"
)

func Dashboard(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "<h1>Dashboard Page<h1>")
}
