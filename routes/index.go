package routes

import (
	"html/template"
	"log"
	"net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/base.html", "templates/index.html", "templates/header.html", "templates/footer.html")

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}

	data := IndexData{
		Title: "Home--CTSDA",
		Body:  "dummy somethennnng",
	}

	if err = tmpl.ExecuteTemplate(w, "base.html", &data); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))
		log.Println("GET "+r.URL.Path+":", err)
	}
}

type IndexData struct {
	Title string
	Body  string
}
