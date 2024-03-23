import { useState } from "react";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
  return (
    <form>
      <div className="p-10 space-y-12 sm:space-y-16">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">Let's get in touch</h1>
          <p className="mt-5 max-w-2xl text-med leading-6 text-gray-600">
            Send me a message and I'll get back to you!
          </p>
        
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={function (event) {
                        setFormData({
                            ...formData,
                            name: event.target.value
                        })
                    }}
                    onBlur={function (event) {
                        if (event.target.value === "") document.getElementById("nameWarn").textContent="Please include a name above."
                        else {
                            document.getElementById("nameWarn").textContent=""
                        }
                      }}
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
                <p id="nameWarn" className="mt-3 text-sm leading-6 text-gray-600"></p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Email
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={function (event) {
                        setFormData({
                            ...formData,
                            email: event.target.value
                        })
                    }}
                    onBlur={function (event) {
                        if (event.target.value === "") document.getElementById("emailWarn").textContent="Please include an email above."
                        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(event.target.value)) {
                            document.getElementById("emailWarn").textContent="Please enter a valid email address." 
                        }
                        else {
                            document.getElementById("emailWarn").textContent=""
                        }
                      }}
                    
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith@email.com"
                  />
                </div>
                <p id="emailWarn" className="mt-3 text-sm leading-6 text-gray-600"></p>
                      
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Message
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={function (event) {
                      setFormData({
                          ...formData,
                          message: event.target.value
                      })
                  }}
                  onBlur={function (event) {
                    if (event.target.value === "") document.getElementById("messageWarn").textContent="Please include a message above."
                    else {
                        document.getElementById("messageWarn").textContent=""
                    }
                  }}
                  rows={3}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                <p id="messageWarn" className="mt-3 text-sm leading-6 text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
