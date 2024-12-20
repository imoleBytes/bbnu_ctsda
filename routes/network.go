package routes

import (
	"ctsda/db"
	"ctsda/models"
	"ctsda/utils"
	"html/template"
	"log"
	"net/http"
)

func Network(w http.ResponseWriter, r *http.Request) {
	// get data from db
	println("1")

	institutions, err := models.GetInstitutions(&db.Store)
	// institutions, err := storage.GetInstitutions()
	if err != nil {
		println("2")

		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	println("3")
	data := struct {
		Title string
		Data  []utils.Institution
		// Data  []storage.Institution
	}{
		Title: "Networks--CTSDA",
		Data:  institutions,
	}

	// preent data to template
	tmpl, err := template.ParseFiles("templates/base.html", "templates/network.html", "templates/header.html", "templates/footer.html")
	// tmpl, err := template.ParseGlob("templates/about.html")
	if err != nil {
		println("4")

		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}

	err = tmpl.ExecuteTemplate(w, "base.html", data)
	if err != nil {
		println("5")

		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
}
