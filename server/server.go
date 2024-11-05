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
	// s.Router.Handle("/public", http.FileServer(http.Dir("public")))
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
