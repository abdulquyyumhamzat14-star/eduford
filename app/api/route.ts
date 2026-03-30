
import {transporter,mailoptions} from "@/config/nodemailer"
import { NextResponse } from "next/server"

const dataToHTML =(data: object) => {
    let str = ""
    for(const [key, value] of Object.entries(data)) {
        str= `<h3>${key}:</h3><p>${value}</p>`
    }
    return str
}


export async function POST(request: Request) {
    const data = await request.json()
     
    try{
        await  transporter.sendMail({
            ...mailoptions,
            subject: "contact form",
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                 <div style="width: 50%; margin: auto; padding: 10px; border: 1px; color: black  dotted ">
               <h1>Contact Form</h1>
               ${dataToHTML(data)}
                </div>
            </body>
            </html>`
        })
    }catch (error) {
        console.log(error)
    }
    return NextResponse.json(data)
}