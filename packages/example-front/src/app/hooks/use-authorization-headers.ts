export function useAuthorizationHeader() {
  function bearerAuthHeader() {
    return {
      Authorization: `Bearer as ${localStorage.getItem('token')}`,
    };
  }
  return {
    bearerAuthHeader,
  };
}
