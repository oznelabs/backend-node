const axios = require('axios');
const Politico = require('../models/Politico');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    const loggedPolitico = await Politico.findById(user);
    const users = await Politico.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedPolitico.likes } },
        { _id: { $nin: loggedPolitico.dislikes } },
      ]
    })

    return res.json(users);
  },
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Politico.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    const politico = await Politico.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(politico);
  }
};