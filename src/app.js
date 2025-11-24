const express = require("express");
const { validateUserData } = require("./createUserHelper");

const app = express();
app.use(express.json());

app.post("/create-test", (req, res) => res.json({ msg: "Create working" }));

let users = [];

// CREATE USER
app.post("/users", (req, res) => {

    // VALIDACIÓN
    if (!validateUserData(req.body)) {
        return res.status(400).json({ error: "Invalid user" });
    }

    users.push(req.body);
    res.json({ message: "User created" });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend.html");
});

// READ USERS
app.get("/users", (req, res) => res.json(users));

// UPDATE USER
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users[id] = req.body;
    res.json({ message: "User updated" });
});

// DELETE USER
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users.splice(id, 1);
    res.json({ message: "User deleted" });
});


// Endpoint DELETE de prueba para la rama feature/delete-user
app.delete("/delete-test", (req, res) => {
    res.json({ msg: "Delete working" });
});


app.put("/update-test", (req, res) => res.json({ msg: "Update working" }));

app.get("/read-test", (req, res) => res.json({ msg: "Read working" }));




app.listen(3000, () => console.log("CRUD running on 3000"));
