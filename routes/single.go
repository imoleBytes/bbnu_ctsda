package routes

import (
	"bytes"
	"ctsda/db"
	"ctsda/models"
	"html/template"
	"log"
	"net/http"

	"github.com/yuin/goldmark"
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

	// get a single institue using the tag value
	institute, err := models.GetInstitution(&db.Store, id)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	var buf bytes.Buffer
	md := goldmark.New()
	err = md.Convert([]byte(institute.Body), &buf)
	if err != nil {
		log.Fatalln("error converting md to html" + err.Error())
	}

	institute.Body = buf.String()

	// then render it
	data := struct {
		Title string
		// Data2  *utils.Company
		Data struct {
			Name     string
			Validity bool
			ImageUrl string
			Body     template.HTML
		}
	}{
		Title: "Network--CTSDA",
		Data: struct {
			Name     string
			Validity bool
			ImageUrl string
			Body     template.HTML
		}{
			Name:     institute.Name,
			Validity: institute.Validity,
			ImageUrl: institute.ImageUrl,
			Body:     template.HTML(institute.Body),
		},
	}
	tmpl.ExecuteTemplate(w, "base.html", data)
}
