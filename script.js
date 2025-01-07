import path from "path"
import express, { response } from "express"
import fs from "fs-extra"

const PORT = 5000
const app = express()
const rootDirectory = path.resolve()

console.log("Js initiated")

// const logger = () => {
//   console.log("LOOGGER CALLED")
// }

app.use(express.json())
// app.use(logger)

// Server side rendering for the LOGIN AND SIGNUP
app.get("/", function (req, res) {
  res.sendFile(rootDirectory + "/pages/home.html")
})

app.get("/login", function (req, res) {
  res.sendFile(rootDirectory + "/pages/login.html")
})

app.get("/signup", function (req, res) {
  res.sendFile(rootDirectory + "/pages/signup.html")
})

// READ ALL USER DATA
app.get("/api/v1/users", async (req, res) => {
  console.log("created the user")

  const data = await fs.readFile("./data/userdata.json", "utf8")
  console.log("userData", data)
  const userData = JSON.parse(data)

  res.send(userData)
})

// FIND USER with id
app.get("/api/v1/users/:id", async (req, res) => {
  console.log(200, req.params.id)
  console.log("created the user")
  const { id } = req.params

  const data = await fs.readFile("./data/userdata.json", "utf8")
  console.log("userData", data)
  const userData = JSON.parse(data)

  const user = userData.find((item) => item.id == id)
  res.send(user)
})

// CREATE NEW DATA
app.post("/api/v1/users", async function (req, res) {
  console.log(100, req.body)
  const newUser = req.body

  const data = await fs.readFile("./data/userdata.json", "utf8")
  console.log("userData", data)
  const userData = JSON.parse(data)
  newUser.id = userData.length + 1
  userData.push(newUser)

  await fs.writeFile("./data/userdata.json", JSON.stringify(userData))
  res.send("new user added")
})

// TO UPDATE USER DATA
app.put("/api/v1/users/:id", async function (req, res) {
  console.log(500, req.body)
  const newData = req.body
  const { id } = req.params

  const data = await fs.readFile("./data/userdata.json", "utf8")
  const userData = JSON.parse(data)
  const user = userData.find((item) => item.id == id)

  if (user) {
    console.log(user)
    user.name = newData.name
    user.age = newData.age
    user.email = newData.email
    user.address = newData.address

    await fs.writeFile("./data/userdata.json", JSON.stringify(userData))
    res.send("User updated successfully")
  } else {
    res.status(404).send("User not found")
  }

  console.log("update the user")
})

//TO UPDATE SPECIFIC USER DETAILS
app.patch("/api/v1/users/:id", async function (req, res) {
  const newData = req.body
  console.log(newData)
  const { id } = req.params

  const data = await fs.readFile("./data/userdata.json", "utf8")
  const userData = JSON.parse(data)

  const user = userData.find((item) => item.id == id)
  if (user) {
    Object.keys(newData).forEach((key) => {
      user[key] = newData[key]
    })
    await fs.writeFile("./data/userdata.json", JSON.stringify(userData))
  } else {
    console.log("user not found")
  }
})

// TO DELETE USER
app.delete("/api/v1/users/:id", async function (req, res) {
  const { id } = req.params

  const data = await fs.readFile("./data/userdata.json", "utf8")
  const userData = JSON.parse(data)

  const updatedUserData = userData.filter((item) => item.id != id)
  await fs.writeFile("./data/userdata.json", JSON.stringify(updatedUserData))

  res.send("User deleted")
})

app.listen(PORT, () => {
  console.log("The server is Running")
})
