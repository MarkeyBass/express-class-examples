import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res, next) => {
  
  res.json({ msg: "home page" });
});

app.get("/hello-world", (req, res, next) => {
  res.json({ msg: "hellow world" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
