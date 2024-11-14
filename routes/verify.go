package routes

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func VerifyCert(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/base.html", "templates/verify.html", "templates/header.html", "templates/footer.html")
	// tmpl, err := template.ParseGlob("templates/about.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	data := IndexData{
		Title: "Verify--CTSDA",
		// Body:  "different content",
	}
	tmpl.ExecuteTemplate(w, "base.html", data)
}

func PostVerifyCert(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/base.html", "templates/verify.html", "templates/header.html", "templates/footer.html")
	// tmpl, err := template.ParseGlob("templates/about.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	err = r.ParseForm()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(http.StatusText(http.StatusInternalServerError)))

		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	code := r.PostFormValue("code")
	data := IndexData{
		Title: "Verify--CTSDA",
		Body:  "different content: " + code,
	}

	fmt.Println("code is: " + code)
	tmpl.ExecuteTemplate(w, "base.html", data)
}
