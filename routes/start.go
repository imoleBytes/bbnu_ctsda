package routes

import (
	"html/template"
	"log"
	"net/http"
)

func Start(w http.ResponseWriter, r *http.Request) {
	// template.ParseFiles("templa")
	tmpl, err := template.ParseFiles("templates/base.html", "templates/start.html", "templates/header.html", "templates/footer.html")
	if err != nil {
		log.Println(err)
	}
	tmpl.Execute(w, nil)
	// io.WriteString(w, "<h1>Contact Page<h1>")
}
