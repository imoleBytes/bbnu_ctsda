-- Create users table
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
    password TEXT NOT NULL
);

-- Create institutions table
CREATE TABLE IF NOT EXISTS institutions(
    id VARCHAR(255) PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    description TEXT,
    body TEXT,
    legal_status VARCHAR(100) NOT NULL,
    reg_number VARCHAR(100),
    country VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    contact_person VARCHAR(100) NOT NULL,
    contact_person_position VARCHAR(100),
    contact_person_phone VARCHAR(20) NOT NULL,
    established_date DATE NOT NULL,
    training_areas TEXT NOT NULL,
    certificates_issued TEXT,
    admission_requirements TEXT,
    delivery_method VARCHAR(20) NOT NULL,
    annual_training_programs INTEGER,
    annual_trainee_count INTEGER,
    total_staff INTEGER,
    website TEXT,
    social_links TEXT,
    local_accreditation TEXT,
    international_accreditation TEXT,
    ctsda_code TEXT,
    validity BOOLEAN
);
