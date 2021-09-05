export const getUsername = () => {
  return window.localStorage.getItem('username') || '';
}

export const setUsername = (username: string) => {
  window.localStorage.setItem('username', username);
}

export const removeUsername = () => {
  window.localStorage.removeItem('username');
}

export const checkAuthenticated = () => {
  return window.localStorage.getItem('isAuthenticated') === 'true';
}

export const setAuthenticated = (isAuthenticated: string) => {
  return window.localStorage.setItem('isAuthenticated', isAuthenticated);
}
