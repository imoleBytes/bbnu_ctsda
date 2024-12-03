package db

import (
	"ctsda/utils"
	"database/sql"
	"errors"
	"fmt"
	"log"
	"os"

	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
)

func getDB() *sql.DB {
	db, err := sql.Open("sqlite3", "data/bbnu.db")
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v\n", err)
	}
	if err = db.Ping(); err != nil {
		log.Printf("Not pinging...: %v", err)
		return nil
	}
	return db
}

func SetupDB() {
	db := getDB()
	defer db.Close()

	contents, err := os.ReadFile("db/sql_scripts/setup.sql")
	if err != nil {
		log.Fatalf("error reading setup.sql: %v\n", err)
	}
	_, err = db.Exec(string(contents))
	if err != nil {
		log.Fatalf("Failed to run query from file: %v", err)
	}
	fmt.Println("Query from file ran successfully!")
}

var db = getDB()

var Store = SqliteStoreProvider{
	Db: db,
}

type SqliteStoreProvider struct {
	Db *sql.DB
}

func (s *SqliteStoreProvider) GetCompanies() ([]utils.ApplicantData, error) {
	query := `
	SELECT 
	 id, name, ctsda_code, country, legal_status,
	 validity, email, contact_person, contact_person_phone,
	 delivery_method, website
	FROM institutions;`

	rows, err := s.Db.Query(query)
	if err != nil {
		log.Printf("error fetching companies: %+v\n", err)
		return nil, err
	}
	defer rows.Close()
	var companies []utils.ApplicantData
	for rows.Next() {
		var company utils.ApplicantData
		err = rows.Scan(&company.Id, &company.Name, &company.Code,
			&company.Country, &company.LegalStatus, &company.Validity,
			&company.Email, &company.ContactPerson, &company.ContactPersonPhone,
			&company.DeliveryMethod, &company.Website)

		if err != nil {
			log.Printf("Failed to read row: %v", err)
			return nil, err
		}

		companies = append(companies, company)
	}
	return companies, err
}

// SELECT substr(body, 1,
// instr(body || ' ', ' ', 50)) AS first_50_words
// FROM your_table;

// thisone talk straight with the database, here is where we should have the sql queries
func (s *SqliteStoreProvider) GetInstitutions() ([]utils.Institution, error) {
	// COALESCE is tohandle empty value. and supply default value if NULL
	queryNetworks := `SELECT id, name, image_url, description FROM institutions;`

	rows, err := s.Db.Query(queryNetworks)
	if err != nil {
		log.Printf("Failed to query Institutions: %v", err)
		return nil, err
	}
	defer rows.Close()

	institutes := []utils.Institution{}

	for rows.Next() {
		var institute utils.Institution
		err = rows.Scan(&institute.Id, &institute.Name, &institute.ImageUrl, &institute.Description)
		if err != nil {
			log.Printf("Failed to read row: %v", err)
			return nil, err
		}

		institutes = append(institutes, institute)
	}
	return institutes, nil
}

func (s *SqliteStoreProvider) GetInstitution(id string) (*utils.Company, error) {
	queryIntitute := `SELECT name, validity, image_url, body FROM institutions WHERE id = ?;`
	row := s.Db.QueryRow(queryIntitute, id)

	var Institute utils.Company

	err := row.Scan(&Institute.Name, &Institute.Validity, &Institute.ImageUrl, &Institute.Body)
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

func (s *SqliteStoreProvider) GetInstitutionByCode(code string) (*utils.Company, error) {
	queryIntitute := `SELECT name, id, validity, ctsda_code, contact_person, contact_person_phone FROM institutions WHERE ctsda_code = ?;`
	row := s.Db.QueryRow(queryIntitute, code)

	var Institute utils.Company

	err := row.Scan(&Institute.Name, &Institute.Id, &Institute.Validity, &Institute.Code, &Institute.ContactPerson, &Institute.ContactPersonPhone)
	if err != nil {
		if err == sql.ErrNoRows {
			err = errors.New("no institute found with the ctsda_code: " + code)
		}
		return nil, err
	}
	return &Institute, nil
}

func (s *SqliteStoreProvider) CheckValidation(code string) (*utils.Company, error) {
	queryIntitute := `SELECT name, validity, ctsda_code, website, country, training_areas FROM institutions WHERE ctsda_code = ? AND validity = 1;`
	row := s.Db.QueryRow(queryIntitute, code)

	var Institute utils.Company

	err := row.Scan(&Institute.Name, &Institute.Validity, &Institute.Code, &Institute.Website, &Institute.Country, &Institute.TrainingAreas)
	if err != nil {
		if err == sql.ErrNoRows {
			err = errors.New("no institute found with the ctsda_code: " + code)
		}
		return nil, err
	}
	return &Institute, nil
}

func (s *SqliteStoreProvider) CreateInstitution(data *utils.ApplicantData) error {
	id := uuid.New().String()

	query := `INSERT INTO institutions
	(
		id, name, legal_status, reg_number, country, address, email, contact_person,
		contact_person_position, contact_person_phone, established_date, training_areas, 
		certificates_issued, admission_requirements, delivery_method, annual_training_programs,
		annual_trainee_count, total_staff, website, social_links, local_accreditation, 
		international_accreditation, description, image_url
	) 
	VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, 'company_default.svg');`

	_, err := s.Db.Exec(query,
		id, data.Name, data.LegalStatus,
		data.RegNum, data.Country, data.Address,
		data.Email, data.ContactPerson, data.ContactPersonPosition,
		data.ContactPersonPhone, data.Established, data.TrainingAreas,
		data.CertificatesIssued, data.AdmissionRequirements, data.DeliveryMethod,
		data.AnnualTrainingPrograms, data.AnnualTraineeCount, data.TotalStaff,
		data.Website, data.SocialLinks, data.LocalDocuments,
		data.InternationalDocuments, data.ShortDescription)
	if err != nil {
		log.Println(err)
		return err
	}
	return nil
}

func (s *SqliteStoreProvider) UpdateValidity(id string, status bool) error {

	query := `UPDATE institutions SET validity = ? WHERE id = ?;`

	_, err := s.Db.Exec(query, status, id)
	if err != nil {
		log.Println(err)
		return err
	}
	return nil
}

func (s *SqliteStoreProvider) UpdateDescription(id, md string) error {
	query := `UPDATE institutions SET body = ? WHERE id = ?;`
	_, err := s.Db.Exec(query, md, id)

	if err != nil {
		println("got to error")
		log.Fatalln(err)
		return err
	}
	return nil
}
