package server

import (
	"ctsda/routes"
	"fmt"
	"net/http"
	"os"
)

type Server struct {
	Address string
	Router  *http.ServeMux
}

// All routes are registered here
func (s *Server) RegisterRoutes() {

	fs := http.FileServer(http.Dir("public"))

	fs2 := http.StripPrefix("/public/", fs)
	s.Router.Handle("/public/", fs2)

	// s.Router.HandleFunc("GET /index/", func(w http.ResponseWriter, r *http.Request) {
	// 	http.Redirect(w, r, "/", http.StatusMovedPermanently)
	// })
	s.Router.HandleFunc("GET /{$}", routes.Index)
	s.Router.HandleFunc("GET /about", routes.About)
	s.Router.HandleFunc("GET /services", routes.Services)
	s.Router.HandleFunc("GET /contact", routes.Contact)
	s.Router.HandleFunc("GET /start", routes.Start)
	s.Router.HandleFunc("GET /application", routes.Application)
	s.Router.HandleFunc("POST /application", routes.SubmitApplication)

	s.Router.HandleFunc("/login", routes.Login)
	s.Router.HandleFunc("GET /dashboard", authorize(routes.Dashboard))
	// s.Router.HandleFunc("GET /dashboard", routes.Dashboard)

	s.Router.HandleFunc("GET /dash-page", routes.DashPage)
	s.Router.HandleFunc("GET /validate-page", routes.ValidatePage)
	s.Router.HandleFunc("GET /institute-query", routes.AdminQueryInstitute)
	s.Router.HandleFunc("PUT /togglevalidity", routes.AdminToggleValidity)

	s.Router.HandleFunc("GET /network", routes.Network)
	s.Router.HandleFunc("GET /network/{id}", routes.SingleNetwork)

	s.Router.HandleFunc("GET /verify-cert", routes.VerifyCert)
	s.Router.HandleFunc("POST /verify-cert", routes.PostVerifyCert)

}

func NewServer() Server {
	var SERVER_ADDRESS = fmt.Sprintf("%s:%s", os.Getenv("SERVER_HOST"), os.Getenv("SERVER_PORT"))

	server := Server{
		Address: SERVER_ADDRESS,
		Router:  http.NewServeMux(),
	}

	server.RegisterRoutes()
	return server
}

func authorize(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("got to redirect and authorize!")
		// pass := r.Header.Get("Authorization")
		pass, err := r.Cookie("Authorization")
		if err != nil {
			fmt.Println("err: " + err.Error())
			http.Redirect(w, r, "/login", http.StatusTemporaryRedirect)
			return
		}

		fmt.Println("Pass is: " + pass.Value)

		if pass.Value == "Bearer true" {
			fmt.Println("enter pass ==true in authorize!")

			f(w, r)
		} else {
			fmt.Println("didnt pass ==true in authorize!")

			http.Redirect(w, r, "/login", http.StatusTemporaryRedirect)
		}
	}
}
