package utils

type ApplicantData struct {
	Id                     string
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
	Code                   string
	Validity               bool
	ShortDescription       string
}

type Institution struct {
	Id          string
	Name        string
	ImageUrl    string
	Description string
}

type Company struct {
	Name               string
	Validity           bool
	ImageUrl           string
	Body               string
	Id                 string
	Code               string
	ContactPerson      string
	ContactPersonPhone string
	Website            string
	Country            string
	TrainingAreas      string
}
