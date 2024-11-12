package routes

import (
	"html/template"
	"log"
	"net/http"
)

func Network(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/base.html", "templates/network.html", "templates/header.html", "templates/footer.html")
	// tmpl, err := template.ParseGlob("templates/about.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	// data := IndexData{
	// 	Title: "About--CTSDA",
	// 	Body:  "different content",
	// }
	tmpl.ExecuteTemplate(w, "base.html", nil)
}
