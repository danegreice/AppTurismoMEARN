const Cliente = require('../models/clientes.js')

exports.getClientes = async(req, res) => {
    try {
        const clientes = await Cliente.ClienteModel.find();
        res.json(clientes)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getOneCliente = async (req, res) => {   
  try {;
    res.status(201).json(await Cliente.ClienteModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createCliente = async (req, res) => {   
    try {;
      res.status(201).json(await Cliente.ClienteModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateCliente = async (req, res) => {   
    try {;
      res.status(201).json(await Cliente.ClienteModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteCliente = async (req, res) => {   
    try {;
      res.status(201).json(await Cliente.ClienteModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }