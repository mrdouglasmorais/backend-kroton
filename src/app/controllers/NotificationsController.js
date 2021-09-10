import User from "../models/User";
import Notifications from '../schema/Notifications'

class NotificationsController{
  async index(req, res){
    const checkProvider = await User.findOne({
      where: { id: req.userID, provider: true }
    })

    if(!checkProvider){
      return res.status(401).json({ error: 'Você não tem, permissões para acessar este serviço'})
    }

    const notifications = await Notifications.find({
      user: req.userID
    }).sort({ createdAt: 'desc' }).limit(20)

    return res.json(notifications);
  }

  async update(req, res){
    
    const notifications = await Notifications.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )

    return res.json(notifications)
  }
}

export default new NotificationsController();