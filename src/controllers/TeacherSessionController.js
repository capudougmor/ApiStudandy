const connection = require('../database/connection')
const bcrypt = require('bcryptjs') // para desencriptar a hash do banco de dados

module.exports = {
  async create(req, res) {
    const { email, password } = req.body

    if(!email || !password) {
      return res.json({error: 'E-emil e senha obrigatorios'})
    } else {
      const teacher = await connection('teachers')
      .where('email', email)
      .select('*')
      .first()
  
      if(teacher != undefined) {        
          // const correct = bcrypt.compareSync(password, teacher.password)
          
          // if(correct) {
            return res.json(teacher)
          // } else {
          //   return res.status(401).json({ error: 'Senha incorreta!'});
          // }
  
      } else {
        return res.status(400).json({error: 'E-mail no exist'})
      }         
    }      
  }
}