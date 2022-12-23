// 2 factor authentication with the npm library 'speakeasy'.

const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret();

// Store the secret key in a database

const speakeasy = require('speakeasy');

app.post('/generate-otp', (req, res) => {
  // Get the secret key from the request
  const secretKey = req.body.secretKey;

  // Generate an OTP using the secret key
  const otp = speakeasy.totp({
    secret: secretKey,
    encoding: 'base32'
  });

  res.json({ otp });
});

const speakeasy = require('speakeasy');

app.post('/authenticate', (req, res) => {
  // Get the secret key and OTP from the request
  const secretKey = req.body.secretKey;
  const otp = req.body.otp;

  // Validate the OTP using the secret key
  const isValid = speakeasy.totp.verify({
    secret: secretKey,
    encoding: 'base32',
    token: otp
  });

  if (isValid) {
    res.json({ message: 'Authentication successful' });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});
