package routes

import (
	"html/template"
	"log"
	"net/http"
)

func About(w http.ResponseWriter, r *http.Request) {
	// tmpl, err := template.ParseFiles("templates/about.html", "templates/header.html", "templates/footer.html")
	tmpl, err := template.ParseGlob("templates/*.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	tmpl.ExecuteTemplate(w, "AboutPage", nil)
}
