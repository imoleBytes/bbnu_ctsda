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
    image_url TEXT DEFAULT 'company_default.svg',
    description TEXT DEFAULT "",
    body TEXT DEFAULT "",
    legal_status VARCHAR(100) NOT NULL,
    reg_number VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    contact_person VARCHAR(100) NOT NULL,
    contact_person_position VARCHAR(100) DEFAULT "",
    contact_person_phone VARCHAR(20) NOT NULL,
    established_date DATE NOT NULL,
    training_areas TEXT DEFAULT "",
    certificates_issued TEXT DEFAULT '',
    admission_requirements TEXT DEFAULT '',
    delivery_method VARCHAR(20) NOT NULL,
    annual_training_programs INTEGER DEFAULT 0,
    annual_trainee_count INTEGER DEFAULT 0,
    total_staff INTEGER DEFAULT 0,
    website TEXT DEFAULT '',
    social_links TEXT DEFAULT '',
    local_accreditation TEXT DEFAULT '',
    international_accreditation TEXT DEFAULT '',
    ctsda_code TEXT DEFAULT 'nil',
    validity BOOLEAN DEFAULT 0
);


-- Create institutions table
CREATE TABLE IF NOT EXISTS stats(
    last_number_from_code INTEGER DEFAULT 0
);

--Insert one record to stats
INSERT INTO stats VALUES(0);
