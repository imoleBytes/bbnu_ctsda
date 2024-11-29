package routes

import (
	"bytes"
	"ctsda/db"
	"ctsda/models"
	"ctsda/utils"
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/yuin/goldmark"
)

func Dashboard(w http.ResponseWriter, r *http.Request) {

	// get institutions from db
	companies, err := models.GetCompanies(&db.Store)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadGateway)
		log.Printf("error fetching companies: %v", err)
		return
	}

	data := struct {
		Title string
		Data  []utils.ApplicantData
	}{
		Title: "Dashboard -- CTSDA",
		Data:  companies,
	}

	tmpl, err := template.ParseFiles("templates/dashboard/base.html", "templates/dashboard/dash.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.Execute(w, data)
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

func UpdateForm(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/dashboard/updateForm.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.Execute(w, nil)
}

func PUTUpdateForm(w http.ResponseWriter, r *http.Request) {
	// tmpl, err := template.ParseFiles("templates/dashboard/updateForm.html")
	// if err != nil {
	// 	io.WriteString(w, err.Error())
	// 	log.Println(err)
	// 	return
	// }
	r.ParseForm()

	// id := r.PostFormValue("company-id")
	markdownbody := strings.TrimSpace(r.PostFormValue("company-body"))

	fmt.Print(markdownbody)

	var buf bytes.Buffer

	md := goldmark.New()
	if err := md.Convert([]byte(markdownbody), &buf); err != nil {
		log.Fatal(err)
	}

	io.WriteString(w, buf.String())
	fmt.Println(buf.String())
	// io.WriteString(w, fmt.Sprintf("Id: %s and Body: %s\n", id, body))
	// tmpl.Execute(w, nil)
}

func AssignCode(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/dashboard/assignCodePage.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.Execute(w, nil)
}

func PostAssignCode(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	companyID := r.PostFormValue("company-id")
	companyID = strings.TrimSpace(companyID)

	code, err := utils.GenerateCode(companyID)
	if err != nil {

		w.Write([]byte(err.Error()))
		log.Println(err)
		return
	}

	tmpl, err := template.ParseFiles("templates/dashboard/codeAssigned.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	data := struct {
		CompanyID string
		Code      string
	}{
		CompanyID: companyID,
		Code:      code,
	}
	if err = tmpl.Execute(w, &data); err != nil {
		log.Println(err)
	}
}

func DashPage(w http.ResponseWriter, r *http.Request) {

	companies, err := models.GetCompanies(&db.Store)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadGateway)
		log.Printf("error fetching companies: %v", err)
		return
	}

	tmpl, err := template.ParseFiles("templates/dashboard/dash.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}
	tmpl.ExecuteTemplate(w, "dashFragment", companies)
}

func ValidateQuery(w http.ResponseWriter, r *http.Request) {
	code := r.URL.Query().Get("company-code")
	code = strings.TrimSpace(code)
	code = strings.ToUpper(code)

	comp, err := models.GetInstitutionByCode(&db.Store, code)
	if err != nil {
		w.Write([]byte(err.Error()))
		log.Println(err)
		return
	}

	tmpl, err := template.ParseFiles("templates/dashboard/queryInstitute.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}

	tmpl.Execute(w, comp)
}

func AdminToggleValidity(w http.ResponseWriter, r *http.Request) {

	id := r.URL.Query().Get("id")
	validity := r.URL.Query().Get("validity")
	code := r.URL.Query().Get("code")
	code = strings.ToUpper(code)

	valid, _ := strconv.ParseBool(validity)
	valid = !valid

	db.Store.UpdateValidity(id, valid)
	comp, _ := db.Store.GetInstitutionByCode(code)

	tmpl, err := template.ParseFiles("templates/dashboard/queryInstitute.html")
	if err != nil {
		io.WriteString(w, err.Error())
		log.Println(err)
		return
	}

	// data := struct {
	// 	Name   string
	// 	Id     int
	// 	Code   string
	// 	Status string
	// 	Person string
	// 	Phone  string
	// }{
	// 	Name:   "Glad Consultancy",
	// 	Id:     23,
	// 	Code:   "Now this: " + id,
	// 	Person: "John Abruzzi",
	// 	Phone:  "0904544544",
	// }

	tmpl.Execute(w, comp)
}
