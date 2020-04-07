const express = require('express');
const db = require('../models');

const router = express.Router();

// 그룹만들기 올리기
router.post('/', async (req, res) => { // POST /api/post/gpost
  try {
    const newGpost = await db.Gpost.create({
      title: req.body.title,
      descp: req.body.descp,
      gpostId: req.UserId,
    });
    const fullGpost = await db.Gpost.findOne({
      where: { id: newGpost.id },
      include: [{
        model: db.User,
      }],
    });
    res.json(fullGpost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// 그룹만들어놓은거 불러오기
router.get('/', async (req, res, next) => { // GET /api/gpost
  try {
    const gpost = await db.Gpost.findAll({
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
      order: [['createdAt', 'DESC']], 
    });
    res.json(gpost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;