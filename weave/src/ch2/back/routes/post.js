const express = require('express');
const db = require('../models');

const router = express.Router();
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

router.post('/images', (req, res) => {

});

// router.post('/gpost', async (req, res) => { // POST /api/post/gposts
//   try {
//     const newGpost = await db.Gpost.create({
//       title: req.body.title,
//       content: req.body.content,
//       UserId: req.user.id,
//     });
//     const fullGpost = await db.Gpost.findOne({
//       where: { id: newGpost.id },
//       include: [{
//         model: db.User,
//       }],
//     });
//     res.json(fullGpost);
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// });

module.exports = router;