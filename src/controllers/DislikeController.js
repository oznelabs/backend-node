const Politico = require('../models/Politico');

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { politicoId } = req.params;

    const loggedPolitico = await Politico.findById(user);
    const targetPolitico = await Politico.findById(politicoId)

    if (!targetPolitico) {
      return res.status(400).json({ error: 'Politico não existe' });
    }
    
    loggedPolitico.dislikes.push(targetPolitico._id);

    await loggedPolitico.save()
    return res.json(loggedPolitico);
  }
}