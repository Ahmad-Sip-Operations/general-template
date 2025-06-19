CREATE TABLE
    IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Dummy user insert (if not exists)
INSERT INTO
    users (email, first_name, last_name, password)
SELECT
    tmp.email,
    tmp.first_name,
    tmp.last_name,
    tmp.password
FROM
    (
        SELECT
            'demo@example.com' AS email,
            'Demo' AS first_name,
            'User' AS last_name,
            '__HASHED_PASSWORD__' AS password
    ) AS tmp
WHERE
    NOT EXISTS (
        SELECT
            1
        FROM
            users
        WHERE
            email = 'demo@example.com'
    );