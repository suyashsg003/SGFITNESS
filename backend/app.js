import express from "express";
import { config } from "dotenv";
import cors from "cors";
import {sendEmail} from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({path: "./config.env"});

app.use(cors({
origin: [process.env.FRONTEND_URL],
methods: ["PORT"],
credentials: true
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res, next) => {
    const {name, email, message } = req.body;
    if (!name || !email || !message) {
        return next(res.status(400).json({
            success: false,
            message: "Please fill all the fields"
        })
    );
    }
    try {
        await sendEmail({
            email: "suyashs.g2004@gmail.com",
            subject: "GYM WEBSITE CONTACT",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
        
    }
});
app.use("/", router);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});