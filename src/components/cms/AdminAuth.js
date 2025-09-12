// src/components/cms/AdminAuth.js
import {
  faUser,
  faLock,
  faSignInAlt,
  faSpinner,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useState } from "react"
import styled from "styled-components"

import { auth } from "../../lib/firebase"

const AdminAuth = ({ user, onAuthChange: _onAuthChange }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await signInWithEmailAndPassword(auth, email, password)
      showNotification("Successfully logged in as admin!")
    } catch (error) {
      console.error("Login error:", error)
      setError(getErrorMessage(error.code))
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      showNotification("Successfully logged out.")
    } catch (error) {
      console.error("Logout error:", error)
      setError("Failed to log out. Please try again.")
    }
  }

  const getErrorMessage = errorCode => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No admin account found with this email."
      case "auth/wrong-password":
        return "Incorrect password."
      case "auth/invalid-email":
        return "Invalid email address."
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later."
      default:
        return "Login failed. Please check your credentials."
    }
  }

  const showNotification = message => {
    const notification = document.createElement("div")
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: #4a7c59;
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 4000)
  }

  if (user) {
    return (
      <AuthContainer>
        <UserInfo>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} />
          Logged in as: {user.email}
        </UserInfo>
        <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
      </AuthContainer>
    )
  }

  return (
    <AuthContainer>
      <AuthHeader>
        <FontAwesomeIcon icon={faLock} style={{ marginRight: "8px" }} />
        Admin Login Required
      </AuthHeader>

      <AuthForm onSubmit={handleLogin}>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FormGroup>
          <label htmlFor="admin-email">Email:</label>
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="admin@avocadosushi.ca"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="admin-password">Password:</label>
          <PasswordWrapper>
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Enter admin password"
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </PasswordToggle>
          </PasswordWrapper>
        </FormGroup>

        <LoginButton type="submit" disabled={loading || !email || !password}>
          {loading ? (
            <>
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                style={{ marginRight: "8px" }}
              />
              Signing In...
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ marginRight: "8px" }}
              />
              Sign In
            </>
          )}
        </LoginButton>
      </AuthForm>

      <HelpText>
        Contact the site administrator if you need access credentials.
      </HelpText>
    </AuthContainer>
  )
}

// Styled Components
const AuthContainer = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 20px;
`

const AuthHeader = styled.h3`
  color: #4a7c59;
  margin-bottom: 20px;
  text-align: center;
`

const UserInfo = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 500;
`

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FormGroup = styled.div`
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #4a7c59;
      box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.1);
    }
  }
`

const PasswordWrapper = styled.div`
  position: relative;
`

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #4a7c59;
  }
`

const LoginButton = styled.button`
  background: #4a7c59;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #3d6b4a;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(74, 124, 89, 0.3);
  }
`

const LogoutButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c82333;
    transform: translateY(-2px);
  }
`

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #f5c6cb;
  text-align: center;
`

const HelpText = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 15px;
  font-style: italic;
`

export default AdminAuth
