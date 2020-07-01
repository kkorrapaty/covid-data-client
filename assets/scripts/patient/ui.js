'use strict'
const store = require('../store')

const showPatientTemplate = require('../templates/patient-listing.handlebars')

// Create Patient Display
const createPatientSuccess = function (response) {
  console.log(response)
  store.patient = response.patient
  $('form').trigger('reset')
  $('#content').removeClass().addClass('success').text('Create Patient Success!')
}

const createPatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Create Patient Failed')
}

// show all patients
const showAllPatientSuccess = function (data) {
  // $('.patients').show()
  console.log(data)
  const showPatientsHTML = showPatientTemplate({ patients: data.patients })
  $('#display').html(showPatientsHTML).addClass('.display').show()
}

const showAllPatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Show All Patients Failed')
}

const deletePatientSuccess = function () {
  console.log('In Patient UI')
  // console.log(event)
  // $(event.target).parent().remove()
}

const deletePatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Delete Patient Failed').show()
}

const updatePatientSuccess = function (event) {
  $('#content').removeClass().addClass('success').text('Update Patient Success!').show()
}

const updatePatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Update Patient Failed').show()
}

module.exports = {
  createPatientSuccess,
  createPatientFailure,
  showAllPatientSuccess,
  showAllPatientFailure,
  deletePatientSuccess,
  deletePatientFailure,
  updatePatientSuccess,
  updatePatientFailure
}