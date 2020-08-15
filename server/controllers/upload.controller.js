const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
})

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.jpg' || ext !== '.png')
        cb(null, true);
    cb(null, false);
}

const limits = { fileSize: 1024 * 1024 * 5 }

const uploadImg = multer({ storage, limits, fileFilter }).single("file")

const uploadController = {
    upload: (req, res) => {
        console.log('\x1b[33m%s\x1b[0m', "...UPLOAD IMAGE...");

        uploadImg(req, res, err => {
            if (err) return res.json({ message: { msgBody: "Failed", msgError: true }, err })

            return res.status(200).json({
                message: { msgBody: "Success", msgError: false },
                image: res.req.file.path,
                fileName: res.req.file.filename
            })
        })
    }
}



module.exports = uploadController;