package server

import (
	"ctsda/config"
	"ctsda/routes"
	"net/http"
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

	s.Router.HandleFunc("GET /index/", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/index", http.StatusMovedPermanently)
	})
	s.Router.HandleFunc("GET /index", routes.Index)

	s.Router.HandleFunc("GET /about", routes.About)
	s.Router.HandleFunc("GET /services", routes.Services)
	s.Router.HandleFunc("GET /contact", routes.Contact)
	s.Router.HandleFunc("GET /dashboard", routes.Dashboard)

	s.Router.HandleFunc("GET /network", routes.Network)
	s.Router.HandleFunc("GET /network/{tag}", routes.SingleNetwork)

	s.Router.HandleFunc("GET /verify-cert", routes.VerifyCert)
	s.Router.HandleFunc("POST /verify-cert", routes.PostVerifyCert)

}

func NewServer() Server {
	server := Server{
		Address: config.SERVER_ADDRESS,
		Router:  http.NewServeMux(),
	}
	server.RegisterRoutes()
	return server
}
