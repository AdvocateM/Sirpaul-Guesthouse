require('dotenv').config();
const { Resend } = require('resend');
const { successResponse, errorResponse } = require('./app.response');

const resend = new Resend("re_HgPpNM7A_QFSrNS5ZSzqM8xDAizKhGYob");

const sendEmail = async (res, user, url, subjects, message, title, resendEmail = false) => {
  console.log('Resend API Key:', process.env.RESEND_API_KEY);
  const msg = {
    from: process.env.SEND_SENDER_MAIL,
    to: user.email,
    subject: subjects,
    text: message,
    html: `<div>
      <h4>${title}</h4>
      <a href="${url}" target="_blank"> >>> Click Here</a>
    </div>`
  };

  try {
    await resend.sendEmail(msg);
    res.status(200).json(successResponse(
      0,
      resendEmail ? 'RESEND SUCCESS' : 'SUCCESS',
      `Email ${resendEmail ? 'resent' : 'sent'} to ${user.email} successfully`
    ));
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      error
    ));
  }
};

module.exports = sendEmail;
