const Employee = require("../models/employeeModel");

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
          status: "succes",
          employees,
        });  
    } catch (error) {
        res.status(404).json({
            status: "fail",
        })
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(201).json({
          status: "succes",
          employee,
        });  
    } catch (error) {
        res.status(404).json({
            status: "fail",
        })
    }
};
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
          status: "succes",
          employee,
        });  
    } catch (error) {
        res.status(404).json({
            status: "fail",
        })
    }
};
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({
          status: "succes",
        });  
    } catch (error) {
        res.status(404).json({
            status: "fail",
        })
    }
};