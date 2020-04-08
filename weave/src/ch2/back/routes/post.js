const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models');

const router = express.Router();
// const { isLoggedIn } = useSelector(state=> state.user);

// 이미지 업로드
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done){
      done(null, 'upload');
    },
    filename(req,file,done){
      const ext = path.extname(file,originalname);
      const basename = path.basename(file.originalname, ext); 
      done(null, basename + new Date().valueOf() + ext); //이미지이름중복막기위해
    },
  }),
  limits:{ fileSize: 20* 1024 * 1024 },
});

// 게시물 올리기 route
router.post('/', async (req, res, next) => { // POST /api/post : 게시글올리기라우터
  try {
    const hashtags = req.body.content.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content: req.body.content, // ex) '제로초 파이팅 #구독 #좋아요 눌러주세요'
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      })));
      console.log(result);
      await newPost.addHashtags(result.map(r => r[0]));
    }
    // if (req.body.image) { // 이미지 주소를 여러개 올리면 image: [주소1, 주소2]
    //   if (Array.isArray(req.body.image)) {
    //     const images = await Promise.all(req.body.image.map((image) => {
    //       return db.Image.create({ src: image });
    //     }));
    //     await newPost.addImages(images);
    //   } else { // 이미지를 하나만 올리면 image: 주소1
    //     const image = await db.Image.create({ src: req.body.image });
    //     await newPost.addImage(image);
    //   }
    // }
    // const User = await newPost.getUser();
    // newPost.User = User;
    // res.json(newPost);
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
      }],
    });
    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});


// 이미지 업로드
router.post('/images', upload.array('image'), (req, res) => {
  console.log(req.files);
  res.json(req.files.map(v => v.filename));
});



// 댓글불러오기
router.get('/:id/comments', async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const comments = await db.Comment.findAll({
      where: {
        PostId: req.params.id,
      },
      order: [['createdAt', 'ASC']],
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
// 댓글올리기
router.post('/:id/comment', async (req, res, next) => { // POST /api/post/1000000/comment
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const newComment = await db.Comment.create({
      PostId: post.id,
      UserId: req.user.id,
      content: req.body.content,
    });
    await post.addComment(newComment.id);
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id,
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    return res.json(comment);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});




module.exports = router;