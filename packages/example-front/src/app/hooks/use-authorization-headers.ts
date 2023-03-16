export function useAuthorizationHeader() {
  function bearerAuthHeader() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }
  return {
    bearerAuthHeader,
  };
}
