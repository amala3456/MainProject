const express = require('express')
const cors = require('cors')
const multer = require('multer')
const router = express.Router();


router.use(cors())
router.use(express.json())

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, './public/Docs')
    // 
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage})

router.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body)
  console.log(req.file)
})
module.exports = router;

