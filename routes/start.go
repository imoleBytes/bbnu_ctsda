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

func Application(w http.ResponseWriter, r *http.Request) {
	// template.ParseFiles("templa")
	tmpl, err := template.ParseFiles("templates/base.html", "templates/application.html", "templates/header.html", "templates/footer.html")
	if err != nil {
		log.Println(err)
		return
	}
	data := struct {
		Title string
		Data  string
	}{
		Title: "Application--CTSDA",
	}

	tmpl.Execute(w, data)
}
