const currentDateTime = require('../lib/current.date.time');
const getDateAfterDuration = require('../lib/get.date.after.duration');

/**
 * Function to send success response for user login with JWT access and refresh token
 * @param {*} res Express response object
 * @param {*} user User object with login information
 * @param {*} maintenance Optional maintenance information
 */
const loginResponse = (res, user, maintenance) => {
  // Generate JWT tokens
  const accessToken = user.getJWTToken();
  const refreshToken = user.getJWTRefreshToken();

  // Convert JWT_TOKEN_COOKIE_EXPIRES from days to milliseconds
  const cookieExpiresIn = parseInt(process.env.JWT_TOKEN_COOKIE_EXPIRES, 10) * 24 * 60 * 60 * 1000;

  // Options for the cookie
  const options = {
    expires: new Date(Date.now() + cookieExpiresIn),
    httpOnly: true
  };

  // Log the JWT secret keys (for debugging purposes)
  // console.log('JWT Secret Key:', process.env.JWT_SECRET_KEY);
  // console.log('JWT Refresh Token Secret Key:', process.env.JWT_REFRESH_TOKEN_SECRET_KEY);

  // Send response
  res.status(200).cookie('AccessToken', accessToken, options).json({
    result_code: 0,
    time: currentDateTime(),
    maintenance_info: maintenance || null,
    access_token: accessToken,
    refresh_token: refreshToken,
    access_token_expires: getDateAfterDuration(process.env.JWT_ACCESS_TOKEN_EXPIRES),
    refresh_token_expires: getDateAfterDuration(process.env.JWT_REFRESH_TOKEN_EXPIRES),
    result: {
      title: 'SUCCESS',
      message: 'User login successful',
      data: {
        id: user._id,
        userName: user.userName,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        avatar: process.env.APP_BASE_URL + user.avatar,
        gender: user.gender,
        dob: user.dob,
        address: user.address,
        role: user.role,
        verified: user.verified,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    }
  });
};

module.exports = loginResponse;
