// AuthService.js
class AuthService {
	login = (username, password) => {
		// Perform API call for authentication
		// Example: fetch('/api/login', { method: 'POST', body: { username, password }})
		// Save authentication token or session data
		sessionStorage.setItem('isLoggedIn', true)
		sessionStorage.setItem('userRole', 'employee') // You may adjust this based on actual user role
	}

	logout = () => {
		// Clear authentication token or session data
		sessionStorage.removeItem('isLoggedIn')
		sessionStorage.removeItem('userRole')
	}

	isAuthenticated = () => {
		// Check if user is authenticated
		return sessionStorage.getItem('isLoggedIn') === 'true'
	}

	getUserRole = () => {
		return sessionStorage.getItem('userRole')
	}
}

export default new AuthService()
