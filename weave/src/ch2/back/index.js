const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = require('./passport');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const gpostAPIRouter = require('./routes/gpost');

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use('/', express.static('uploads'));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:true,
  credentials:true,
}
));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false, // https를 쓸 때 true
  },
  name: 'rnbck',
}));
app.use(passport.initialize());
app.use(passport.session()); // express보다 뒤에와야함

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/gpost', gpostAPIRouter); //그룹포스트

app.listen(3065, () => {
  console.log('server is running on http://localhost:3065');
});

//db.sequelize.sync() : 자동으로 테이블생성해줌
//app.use(express.urlencoded({ extended: true })); : form 으로 넘어온데이터처리