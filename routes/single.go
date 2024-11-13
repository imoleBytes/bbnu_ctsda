package routes

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func SingleNetwork(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/base.html", "templates/single.html", "templates/header.html", "templates/footer.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}

	tag := r.PathValue("tag")
	fmt.Println("Tag is: " + tag)

	// get a single institue

	// then render it
	tmpl.ExecuteTemplate(w, "base.html", nil)
}
