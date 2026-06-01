const express  = require("express")
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const cookieParser = require("cookie-parser")


const app =express()
// it is for whole sevre 
// and router () is for like mini app i insdie separate files

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Ledger Service is up and running")
})

app.use("/api/auth",authRouter) 
// app.js  to authRouter to auth controller 
app.use("/api/accounts",accountRouter)

const transactionRoutes = require("./routes/transaction.routes")
app.use("/api/transactions" , transactionRoutes)




module.exports = app
