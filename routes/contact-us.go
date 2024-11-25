package routes

import (
	"html/template"
	"log"
	"net/http"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	// template.ParseFiles("templa")
	tmpl, err := template.ParseFiles("templates/base.html", "templates/contact.html", "templates/header.html", "templates/footer.html")
	data := struct {
		Title string
		Data  string
	}{
		Title: "Contact Us--CTSDA",
	}

	if err != nil {
		log.Println(err)
	}
	tmpl.Execute(w, data)
	// io.WriteString(w, "<h1>Contact Page<h1>")
}
