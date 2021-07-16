class UserController {

  async store(req, res){
    const { name, age, occupation } = req.body;

    const { page } = req.query;

    const resposta = {
      pagina: page,
      body : {
        nome: name,
        idade: age,
        ocupacao: occupation,
      }
    }

    res.json(resposta)
  }

}

export default new UserController();