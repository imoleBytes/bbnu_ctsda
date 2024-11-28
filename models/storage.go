package models

import "ctsda/utils"

// This is where the interphase to the database lies

type Storage interface {
	GetInstitutions() ([]utils.Institution, error)
	GetInstitution(string) (*utils.Company, error)
	CreateInstitution(*utils.ApplicantData) error
	GetCompanies() ([]utils.ApplicantData, error)
}

func GetCompanies(store Storage) ([]utils.ApplicantData, error) {
	return store.GetCompanies()
}

func GetInstitutions(store Storage) ([]utils.Institution, error) {
	return store.GetInstitutions()
}

func GetInstitution(store Storage, id string) (*utils.Company, error) {
	return store.GetInstitution(id)
}

func CreateInstitution(store Storage, payload *utils.ApplicantData) error {
	return store.CreateInstitution(payload)

}
