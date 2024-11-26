package routes

import (
	"ctsda/storage"
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

	id := r.PathValue("id")
	fmt.Println("Tag is: " + id)

	// get a single institue using the tag value
	institute, err := storage.GetInstitution(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	// then render it
	data := struct {
		Title string
		Data  *storage.Company
	}{
		Title: "Network--CTSDA",
		Data:  institute,
	}
	tmpl.ExecuteTemplate(w, "base.html", data)
}
