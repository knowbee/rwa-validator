/**
 * The Rwanda National Identity Number is structured according to a defined logic which codes for gender, year of
 * birth, production control and has a 7-digit serial number. It uses two Hash Digits
 * at the end to check for validity of the number to minimize data entry. The hashing
 * algorithm is kept secret, as it is viewed as part of the security features of the NIN
 * and the NID card. The structure of the rest of the number is publicly known or is
 * easy to guess, but this does not undermine its security in any way, since it is the hash
 * function that provides its security.
 *
 *
 * The first digit of the identity
 * number can be 1, 2 or 3 depending on whether the card is a national id, a foreigner’s
 * id or a refugee id
 *
 * The next four digits are the year of  birth
 * the next single digit is sex(it's either 7 or 8) - 7 is for female - 8 for male
 *
 * for more information: http://www.id4africa.com/2016/files/ID4Africa2016_The_Identity_Ecosystem_of_Rwanda_eBooklet.pdf
 *
 *
 * Validate national id number
 * @param  {string}  id
 * @return {Boolean}
 */

exports.isNationalId = id => {
  ID_LENGTH = 16;
  minAge = 16;
  const errors = {
    format: false,
    age: false,
    short: false,
    long: false
  };

  // Check it's a string
  // -----------------------------------------
  if (typeof id !== "string") {
    throw new Error("Input should be string");
  }

  if (id.length < ID_LENGTH) {
    return errors.short;
  }

  if (id.length > ID_LENGTH) {
    return errors.long;
  }

  // ----------------------id checking regex
  const re = /^[1-3](19|20)\d{2}[7-8]\d{7}[0-9]\d{2}$/;
  if (!re.test(id)) {
    return errors.format;
  }

  const currentYear = new Date().getFullYear();
  const yearBorn = id.substring(1, 5);

  // Check if user in eligible to have id
  if (currentYear - yearBorn < minAge) {
    return errors.age;
  }
  return true;
};
