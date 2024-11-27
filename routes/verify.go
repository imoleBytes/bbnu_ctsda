package routes

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"strings"
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

	data := struct {
		Title string
		Data  string
	}{
		Title: "Verify--CTSDA",
	}

	if err = tmpl.ExecuteTemplate(w, "base.html", data); err != nil {
		log.Printf("error rendering: %v\n", err)
	}
}

func PostVerifyCert(w http.ResponseWriter, r *http.Request) {
	fmt.Println("hit")
	tmpl, err := template.ParseFiles("templates/fragments/verifyResults.html")
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
	code = strings.ToLower(code)

	// if code == "kolo123" {

	// }
	data := IndexData{
		Body: code,
	}

	fmt.Println("code is: " + code)
	tmpl.Execute(w, data)
	// tmpl.ExecuteTemplate(w, "base.html", data)
}

type IndexData struct {
	Title string
	Body  string
}
