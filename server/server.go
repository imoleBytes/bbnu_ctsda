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
	s.Router.HandleFunc("GET /index", routes.Index)
	s.Router.HandleFunc("GET /about", routes.About)
	s.Router.HandleFunc("GET /services", routes.Services)
	s.Router.HandleFunc("GET /contact", routes.Contact)
	s.Router.HandleFunc("GET /dashboard", routes.Dashboard)
}

func NewServer() Server {
	server := Server{
		Address: config.SERVER_ADDRESS,
		Router:  http.NewServeMux(),
	}
	server.RegisterRoutes()
	return server
}
