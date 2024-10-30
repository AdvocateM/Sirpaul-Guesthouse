const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3034',
  'http://localhost:5500',
  'https://admin-navy-theta.vercel.app/',
  'https://admin-hwpg3q89v-advocatems-projects.vercel.app/',
];


const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS origin'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
