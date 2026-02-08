export function login(token, role) {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
}

export function loginAs(role) {
  localStorage.setItem("token", "demo-token");
  localStorage.setItem("role", role);
}

export function logout() {
  localStorage.clear();
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}

export function getUserRole() {
  return localStorage.getItem("role");
}
