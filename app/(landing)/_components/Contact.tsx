"use client"

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
type Props = {};

export default function Contact({}: Props) {
    const form = useRef()
    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault()
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!,process.env.NEXT_PUBLIC_TEMPLATE_ID!,form.current,
        process.env.NEXT_PUBLIC_KEY!
      ).then(
        () => {
          alert("Email has been sent");
        },
        (error) => {
          alert("Failed")
          console.log('FAILED...', error.text);
        },
      )
    }

  return (
    <div id="contact" className="w-full flex flex-col mt-10 lg:mt-20 " >
      <div className="flex justify-between gap-5 ">
        <div className="flex items-center gap-2  ">
          <p className="text-2xl lg:text-4xl">
            <span className="text-purple-600">#</span>contacts
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5 ">
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col border rounded-lg border-purple-500 p-5 gap-5  " >
          <div className="flex gap-2 flex-wrap">
            <input type="text" name="name" placeholder="Name" required className="p-2 border rounded-md " />
            <input type="email" name="sender_email" placeholder="Email" required className="p-2 border rounded-md " />
            </div>
            <input type="text" name="title" placeholder="Title" required className="p-2 border rounded-md  " />
            <textarea rows={10} cols={10} name="message" placeholder="Message" required className="resize-none border rounded-md p-2" />
            <div className="w-full flex justify-center ">
              <button className="bg-green-700 p-2 px-6 font-semibold rounded-md" >Send</button>
            </div>
        </form>
      </div>
    </div>
  );
}
