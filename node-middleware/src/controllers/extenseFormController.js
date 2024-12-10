const { processExtenseForm } = require('../(services)/extenseFormService.js');

const extenseFormController = async (req, res) => {
  try {
    const formData = req.body
    const result = await processExtenseForm(formData)

    return res.json({ SERVER_BODY: result })

  } catch (err) {
    let fmt = JSON.stringify({ SERVER_ERR: `${err}` })
    console.log(fmt)
    return res.status(500).send(fmt)
  }
}


module.exports = { extenseFormController }
