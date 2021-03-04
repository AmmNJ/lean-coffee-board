app.use((err, req, res, next) => {
  console.log(err.message)
  res.json({ error: err.message })
})
