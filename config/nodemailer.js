import nodemailer  from "nodemailer"

const email = "abdulquyyumhamzat42@gmail.com"
const password = "nrkannrwvhxojfou"

export const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: email,
        pass: password
    }
})

export const mailoptions = {
    from: email,
    to: email
}