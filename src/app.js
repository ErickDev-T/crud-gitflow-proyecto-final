const express = require("express");
const app = express();
app.use(express.json());

let users = [];

app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
    users.push(req.body);
    res.json({ message: "User created" });
});
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users[id] = req.body;
    res.json({ message: "User updated" });
});
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users.splice(id, 1);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => console.log("CRUD running on 3000"));
