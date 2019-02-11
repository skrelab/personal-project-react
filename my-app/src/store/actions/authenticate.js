import { AUTHENTICATE } from '../constants';

// export const authenticate = () => ({
//   type: AUTHENTICATE,
// })

export const authenticate = (bool) => ({
  type: AUTHENTICATE,
  hasAuthenticated: bool
})