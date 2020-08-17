const connection = require('../database/connection')

const convertHoursToMinutes = require('../utils/convertHoursToMinutes')

module.exports = {
  async index(req, res) { 
      const { page = 1 } = req.query; 

      const [count] = await connection('activities').count();  

      const activities = await connection('activities') 
          .limit(5)   
          .offset((page - 1) * 5)
          .select([
              'activities.*']);

      res.header('x-Total-Count', count['count(*)']); 
      return res.json(activities);
  },

  async create(req, res) {   
    const teacher_id = req.headers.authorization;  

    const { 
      subject,
      whatsapp,
      group,
      description,
      week_day,
      from,
      to,
    } = req.body;

    try {
      const activity = await connection('activities').insert({
        teacher_id,
        subject,
        whatsapp,
        group,
        description,
        week_day,
        from: convertHoursToMinutes(from),
        to: convertHoursToMinutes(to),
      }).returning('id')
  
      return res.status(201).json(activity);
    } catch(err) {
      return res.status(401).json(err)
    }
      
  },

  async delete(req, res) { 
    const { id } = req.params;    
    const teacher_id = req.headers.authorization; 
    
    const activity = await connection('activities') 
        .where('id', id)
        .select('teacher_id')
        .first()

    if (activity.teacher_id != teacher_id) { 
        return res.status(401).json({ error: 'Operetion not permitted.'});
    }

    await connection('activities').where('id', id).delete();

    return res.status(204).send(); 
  }
};