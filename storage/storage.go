package storage

import (
	"ctsda/utils"
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/google/uuid"
)

func CreateInstitution(data *utils.ApplicantData) error {
	db, err := getDB()
	if err != nil {
		return err
	}
	defer db.Close()
	id := uuid.New().String()
	query := `
	INSERT INTO institutions
	(
		id, name, legal_status, 
		reg_number, country, address, 
		email, contact_person, contact_person_position, 
		contact_person_phone, established_date, training_areas, 
		certificates_issued, admission_requirements, delivery_method, 
		annual_training_programs, annual_trainee_count, total_staff, 
		website, social_links, local_accreditation, 
		international_accreditation
	) 
	VALUES
	(
		?,?,?,?,?,?,?,?,
		?,?,?,?,?,?,?,
		?,?,?,?,?,?,?
	);`

	_, err = db.Exec(query,
		id, data.Name, data.LegalStatus,
		data.RegNum, data.Country, data.Address,
		data.Email, data.ContactPerson, data.ContactPersonPosition,
		data.ContactPersonPhone, data.Established, data.TrainingAreas,
		data.CertificatesIssued, data.AdmissionRequirements, data.DeliveryMethod,
		data.AnnualTrainingPrograms, data.AnnualTraineeCount, data.TotalStaff,
		data.Website, data.SocialLinks, data.LocalDocuments,
		data.InternationalDocuments)
	if err != nil {
		log.Println(err)
		return err
	}
	return nil

}

func GetInstitution(id string) (*Company, error) {
	db, err := getDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	queryIntitute := `SELECT name, validity, image_url, body FROM institutions WHERE id = ?;`
	row := db.QueryRow(queryIntitute, id)

	var Institute Company

	err = row.Scan(&Institute.Name, &Institute.Validity, &Institute.ImageUrl, &Institute.Body)
	if err != nil {
		if err == sql.ErrNoRows {
			log.Println("No Institute found with the given ID.")
		} else {
			log.Printf("Failed to query Institute: %v", err)
		}
		return nil, err
	}
	return &Institute, nil
}

func GetInstitutions() ([]Institution, error) {
	db, err := getDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	queryNetworks := `SELECT id, name, image_url, description FROM institutions;`
	rows, err := db.Query(queryNetworks)
	if err != nil {
		log.Printf("Failed to query Institutions: %v", err)
		return nil, err
	}
	defer rows.Close()

	institutes := []Institution{}

	for rows.Next() {
		var institute Institution
		err = rows.Scan(&institute.Id, &institute.Name, &institute.ImageUrl, &institute.Description)
		if err != nil {
			log.Printf("Failed to read row: %v", err)
			return nil, err
		}

		institutes = append(institutes, institute)
	}
	return institutes, nil
}

type Institution struct {
	Id          string
	Name        string
	ImageUrl    string
	Description string
}
type Company struct {
	Name     string
	Validity bool
	ImageUrl string
	Body     string
}

func getDB() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "data/bbnu.db")
	if err != nil {
		log.Printf("Failed to connect to the database: %v\n", err)
		return nil, err
	}
	if err = db.Ping(); err != nil {
		log.Printf("Not pinging...: %v", err)
		return nil, err
	}
	return db, nil
}

func SetupDB() {
	db, err := getDB()
	if err != nil {
		log.Fatalf("Unable to setup DB: %v\n", err)
	}
	defer db.Close()

	contents, err := os.ReadFile("storage/setup.sql")
	if err != nil {
		log.Fatalf("error reading setup.sql: %v\n", err)
	}
	_, err = db.Exec(string(contents))
	if err != nil {
		log.Fatalf("Failed to run query from file: %v", err)
	}
	fmt.Println("Query from file ran successfully!")
}
