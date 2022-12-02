import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Se connecter</h3>

        <div className="mb-3">
          <label>Adresse Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Entrer votre email"
          />
        </div>

        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrer votre mot de passe"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Se souvenir
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Envoyez
          </button>
        </div>
        <p className="forgot-password text-right">
        <a href="# ">Oublier mot de passe</a>
        </p>
      </form>
    )
  }
}
