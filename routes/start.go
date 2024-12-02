package routes

import (
	"ctsda/db"
	"ctsda/models"
	"ctsda/utils"
	"html/template"
	"log"
	"net/http"
)

func Start(w http.ResponseWriter, r *http.Request) {
	// template.ParseFiles("templa")
	tmpl, err := template.ParseFiles("templates/base.html", "templates/start.html", "templates/header.html", "templates/footer.html")
	if err != nil {
		log.Println(err)
	}

	tmpl.Execute(w, nil)
	// io.WriteString(w, "<h1>Contact Page<h1>")
}

func Application(w http.ResponseWriter, r *http.Request) {
	// template.ParseFiles("templa")
	tmpl, err := template.ParseFiles("templates/base.html", "templates/application.html", "templates/header.html", "templates/footer.html")
	if err != nil {
		log.Println(err)
		return
	}
	data := struct {
		Title string
		Data  string
	}{
		Title: "Application--CTSDA",
	}

	tmpl.Execute(w, data)
}

func SubmitApplication(w http.ResponseWriter, r *http.Request) {
	// template.ParseFiles("templa")
	if err := r.ParseForm(); err != nil {
		http.Error(w, "Error parsing form data", http.StatusBadRequest)
		log.Println("GET "+r.URL.Path+":", err)
		return
	}
	values := r.PostForm

	applicant := utils.ApplicantData{
		Name:                   values.Get("institution"),
		LegalStatus:            values.Get("legal-status"),
		RegNum:                 values.Get("registration-number"),
		Country:                values.Get("country"),
		Address:                values.Get("address"),
		Email:                  values.Get("email"),
		ContactPerson:          values.Get("person-name"),
		ContactPersonPosition:  values.Get("person-position"),
		ContactPersonPhone:     values.Get("person-phone"),
		Established:            values.Get("establishment-date"),
		TrainingAreas:          values.Get("training-areas"),
		CertificatesIssued:     values.Get("certificate-type"),
		AdmissionRequirements:  values.Get("admission-requirements"),
		DeliveryMethod:         values.Get("training-method"),
		AnnualTrainingPrograms: values.Get("programs-annualized"),
		TotalStaff:             values.Get("number-of-staff"),
		AnnualTraineeCount:     values.Get("training-count-annualized"),
		Website:                values.Get("website"),
		SocialLinks:            values.Get("socials"),
		LocalDocuments:         values.Get("local-accreditation"),
		InternationalDocuments: values.Get("international-accreditation"),
		ShortDescription:       values.Get("short-description"),
	}

	err := models.CreateInstitution(&db.Store, &applicant)
	// err := storage.CreateInstitution(&applicant)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Println(err)
		return
	}

	// fmt.Printf("Form data\n%+v\n", applicant)
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Institutes created successfully!!"))
	w.Write([]byte("\nThanks for submitting, we will get back to you soon."))
}
