import React from 'react'

const Team:React.FC = () => {




        const team = [
            {
                avatar: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/354433984_1452059032303602_4600148812906413917_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFxmpx7Y9pwwV-uJwJXXu5Ai7pz5OReYhuLunPk5F5iG-Ow7ZjH5XZoDQYb6J-NgxjEYmTKjwag-T6PFjC0Z6OC&_nc_ohc=mZcI9OBI3OcAX-IJlII&_nc_ht=scontent.flos1-2.fna&oh=00_AfCTeAER4Pgx4izV_Si8itmhk1bp4RADzHV546Z1cE3Ecg&oe=656FE8F7",
                name: "Godwin Okwoli",
                title: "CEO",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
                linkedin: "javascript:void(0)",
                twitter: "javascript:void(0)",
            },
            {
                avatar: "https://media.licdn.com/dms/image/D4D03AQGqnO5BdrqKPg/profile-displayphoto-shrink_200_200/0/1684253474886?e=1706745600&v=beta&t=f11V2i_EGeTt-8VxAscC7uWCRxPheXrgOlySCUF5Xlw",
                name: "Isaac Etor",
                title: "CTO",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
                linkedin: "javascript:void(0)",
                twitter: "javascript:void(0)",
            },
            {
                avatar: "https://randomuser.me/api/portraits/women/79.jpg",
                name: "Sanni Damilola",
                title: "Backend Engineer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
                linkedin: "javascript:void(0)",
                twitter: "javascript:void(0)",
            },
            {
                avatar: "https://media.licdn.com/dms/image/D4D03AQFWsF6Mzl-DMw/profile-displayphoto-shrink_100_100/0/1696551937100?e=1706745600&v=beta&t=UZThzdcD7LcmV0GACNU2cKIZLLgaKhLkldu1-yBSpOU",
                name: "Cynthia Oguamanam",
                title: "Product Designer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
                linkedin: "javascript:void(0)",
                twitter: "javascript:void(0)",
            },
            {
                avatar: "https://media.licdn.com/dms/image/D4D03AQEgu-9nvk3Jfw/profile-displayphoto-shrink_200_200/0/1701185497986?e=1706745600&v=beta&t=xHLfp9iStb-V6kveho5Qi2aEh4w6MdZg5c7padmFp-4",
                name: "Adimike Valerian",
                title: "Frontend Engineer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
                linkedin: "javascript:void(0)",
                twitter: "javascript:void(0)",
            },

        ]
    
        return (
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Meet our team
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Meet the beautiful young minds behind the application top compamies and brands use and love.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {
                                team.map((item, idx) => (
                                    <li key={idx}>
                                        <div className="w-24 h-24 mx-auto">
                                            <img
                                                src={item.avatar}
                                                className="w-full h-full rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                            <p className="text-indigo-600">{item.title}</p>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                            <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                                <a href={item.twitter}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                                <a href={item.linkedin}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

export default Team