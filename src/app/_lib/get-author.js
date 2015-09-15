import get from 'lodash/object/get';

export default (post) => {
  let name;
  const author = get(post, '_embedded.author.0');
  const { first_name: firstName, last_name: lastName, name: username } = author;
  if (firstName) {
    name = firstName + (lastName ? ` ${lastName}` : '');
  } else {
    name = username;
  }
  return name;
}
