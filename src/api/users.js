/**
 * User API methods.
 * @version 2021.11.15
 * @since 2021.11.15
 */

/*----- Imports --------------------------------------------------------------*/
import tokenService from '../utils/tokens';

/*----- Methods --------------------------------------------------------------*/
const BASE_URL = '/api/users/',
  userUtils = {
    signup: user =>
      new Promise(
        (resolve, reject) =>
          fetch(BASE_URL + 'signup', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(user),
          }).then(res =>
            res
              .json()
              .then(obj =>
                res.ok
                  ? tokenService.setToken(obj.token) || resolve()
                  : reject(obj)
              )
          )
      ),
    login: cred =>
      fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(cred),
      })
        .then(res => {
          if (res.ok) return res.json();
          else throw new Error('Bad Credentials!');
        })
        .then(({ token }) => tokenService.setToken(token)),
    logout: _ => tokenService.removeToken(),
    getUser: _ => tokenService.getUserFromToken(),
  };

/*----- Exports --------------------------------------------------------------*/
export default userUtils;
