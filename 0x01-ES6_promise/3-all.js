import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((response) => {
      console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
    });
}

export default handleProfileSignup;
