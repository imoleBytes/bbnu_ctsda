package routes

import (
	"html/template"
	"io"
	"log"
	"net/http"
)

func Dashboard(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/dashboard/base.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.Execute(w, nil)
}
