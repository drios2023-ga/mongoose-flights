const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

async function index (req, res){
    const allFlights = await Flight.find();
    res.render("flights/",{
        flights: allFlights
    });
}

function newFlight(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    res.render('flights/new.ejs', { errorMsg: '' });
  }

async function create(req, res) {

    try {
      await Flight.create(req.body);
      // Always redirect after CRUDing data

      res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }

  }
