package utils

type ApplicantData struct {
	Name                   string
	LegalStatus            string
	RegNum                 string
	Country                string
	Address                string
	Email                  string
	ContactPerson          string
	ContactPersonPosition  string
	ContactPersonPhone     string
	Established            string
	TrainingAreas          string
	CertificatesIssued     string
	AdmissionRequirements  string
	DeliveryMethod         string
	AnnualTrainingPrograms string
	TotalStaff             string
	AnnualTraineeCount     string
	Website                string
	SocialLinks            string
	LocalDocuments         string
	InternationalDocuments string
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
