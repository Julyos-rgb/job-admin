var express = require('express');
var router = express.Router();

const {
  signup,
  list
} = require('../controllers/users')

// 注册用户
router.post('/', signup)
// 获取用户列表
router.get('/', list)
// 删除用户


module.exports = router;