module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'xxxxxxxxx'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'xxxxxxxxx'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'xxxxxxxxx'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
