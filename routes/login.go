package routes

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func Login(w http.ResponseWriter, r *http.Request) {
	if r.Method == "" || r.Method == "GET" {
		tmpl, err := template.ParseFiles("templates/dashboard/login.html")
		if err != nil {
			log.Println(err)
		}
		tmpl.Execute(w, nil)
	} else if r.Method == "POST" {
		r.ParseForm()
		email := r.PostForm.Get("email")
		passwd := r.PostForm.Get("password")

		fmt.Printf("email: %s\nPassword is: %s\n", email, passwd)

		if email == "bbnu@ctsda.com" && passwd == "baba na u" {
			fmt.Println("pass o!")
			// r.Header.Add("Authorization", "true")
			http.SetCookie(w, &http.Cookie{
				Name:     "Authorization",
				Value:    "Bearer true",
				Path:     "/",  // Cookie accessible to all paths
				HttpOnly: true, // Prevent access via JavaScript
				// Secure:   true, // Ensure it's only sent over HTTPS
			})
			http.Redirect(w, r, "/dashboard", http.StatusSeeOther)
		} else {
			http.Redirect(w, r, "/login", http.StatusMovedPermanently)
		}
	}
	// template.ParseFiles("templa")

	// io.WriteString(w, "<h1>Contact Page<h1>")
}
