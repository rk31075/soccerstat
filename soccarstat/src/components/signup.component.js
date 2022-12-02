import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Inscription</h3>

        <div className="mb-3">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            placeholder="Entrez votre nom"
            id='name'
          />
        </div>

      
        <div className="mb-3">
          <label>Adresse Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Entrer votre email"
            id='email'
          />
        </div>
        <div className="mb-3">
          <label>Numéro de téléphone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Entrer numéro de téléphone"
            id='phone'
          />
        </div>

        <div className="mb-3">
          <label>Team</label>
          <input
            type="text"
            className="form-control"
            placeholder="team"
          />
        </div>
        <div className="mb-3">
          <label>Année d'experience</label>
          <input
            type="number"
            className="form-control"
            placeholder="Année d'experience"
            id="years"
          />
        </div>

        <div className="d-grid">
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrer votre password"
          id='password'
          />
        </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
