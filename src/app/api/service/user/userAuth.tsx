export const userLogout = () => {
  localStorage.clear();
  window.location.href = '/';
};

export const isUserAuthenticated = () => {
  return !!localStorage.getItem('userAccessToken');
};
