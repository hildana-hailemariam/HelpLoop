const db = require("../config/db");

// Get all users
const getUsers = async () => {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
};

// Get user by email
const getUserByEmail = async (email) => {
    const result = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];
};

// Get user by ID
const getUserById = async (id) => {
    const result = await db.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
    );
    return result.rows[0];
};

// Create user
const createUser = async (fullname, email, password) => {
    const result = await db.query(
        `INSERT INTO users(fullname, email, password)
         VALUES($1, $2, $3)
         RETURNING *`,
        [fullname, email, password]
    );

    return result.rows[0];
};

// Update user
const updateUser = async (id, fullname, email) => {
    const result = await db.query(
        `UPDATE users
         SET fullname=$1, email=$2
         WHERE id=$3
         RETURNING *`,
        [fullname, email, id]
    );

    return result.rows[0];
};

module.exports = {
    getUsers,
    getUserByEmail,
    getUserById,
    createUser,
    updateUser
};