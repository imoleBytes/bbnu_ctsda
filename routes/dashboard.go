package routes

import (
	"html/template"
	"io"
	"log"
	"net/http"
)

func Dashboard(w http.ResponseWriter, r *http.Request) {

	tmpl, err := template.ParseFiles("templates/dashboard/base.html", "templates/dashboard/dash.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.Execute(w, nil)
}

func ValidatePage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/dashboard/validatePage.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.Execute(w, nil)
}

func DashPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/dashboard/dash.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.ExecuteTemplate(w, "dashFragment", nil)
}

func AdminQueryInstitute(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/dashboard/queryInstitute.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}

	code := r.URL.Query().Get("company-code")
	data := struct {
		Name   string
		Id     int
		Code   string
		Status string
		Person string
		Phone  string
	}{
		Name:   "Glad Consultancy",
		Id:     23,
		Code:   code,
		Person: "John Abruzzi",
		Status: "invalid",
		Phone:  "0904544544",
	}
	tmpl.Execute(w, data)
}

func AdminToggleValidity(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/dashboard/queryInstitute.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}

	id := r.URL.Query().Get("id")
	validity := r.URL.Query().Get("validity")

	data := struct {
		Name   string
		Id     int
		Code   string
		Status string
		Person string
		Phone  string
	}{
		Name:   "Glad Consultancy",
		Id:     23,
		Code:   "Now this: " + id,
		Person: "John Abruzzi",
		Phone:  "0904544544",
	}
	if validity == "invalid" {
		data.Status = "valid"
	} else {
		data.Status = "invalid"
	}
	tmpl.Execute(w, data)
}
