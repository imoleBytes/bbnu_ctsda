# Makefile

# Define the command as a variable
TAILWIND_CMD = tailwindcss -i public/css/main.css -o public/css/style.css --watch

# Once you use .PHONY for server, make will always execute the go run command, even if there are no file changes.
.PHONY: server
# run default command, juust by type make
# default: all
default: server

# run specified commands
all: server tailwind # this will not work as intended thouh, since server will keep running,

# Target to run the Tailwind command
# make tailwind
tailwind:
	$(TAILWIND_CMD)

# Start the Go server
# make server
server:
	go run cmd/main.go
