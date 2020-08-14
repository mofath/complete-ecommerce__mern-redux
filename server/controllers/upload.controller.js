const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var uploadImg = multer({ storage: storage }).single("file")

const uploadController = {
    upload: (req, res) => {
        console.log('\x1b[33m%s\x1b[0m', "...UPLOAD IMAGE...");

        uploadImg(req, res, err => {
            if (err) {
                return res.json({ message: { msgBody: "failed", msgError: true }, err })
            }
            console.log(res.req.file);

            return res.status(200).json({
                message: { msgBody: "success", msgError: false },
                image: res.req.file.path,
                fileName: res.req.file.filename
            })
        })
    }
}



module.exports = uploadController;