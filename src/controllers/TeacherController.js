const connection = require('../database/connection')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

module.exports = {
  async index(req, res) {
    const teachers = await connection('teachers').select('*')

    return res.json(teachers)
  },

  async create(req, res) { 
    const { name, email, password, whatsapp, school, subject } = req.body;

    const salt =bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const id = crypto.randomBytes(4).toString('HEX'); 

    await connection('teachers').insert({
        id,
        name,
        email,
        password,
        whatsapp, 
        school, 
        subject
    }).then(() => {
      return res.json({ id });
    }).catch((err) => {
      return res.status(401).json(err)
    })
  },

  async delete(req, res) { 
    const { id } = req.params;
    const teacher_id = req.headers.authorization; 
    
    const teacher = await connection('teachers') 
        .where('id', id)
        .select('id')
        .first()

    if (id != teacher_id) {
        return res.status(401).json({ error: 'Operetion not permitted.'});
    }

    await connection('teachers').where('id', id).delete();

    return res.status(204).send(); 
  }
}