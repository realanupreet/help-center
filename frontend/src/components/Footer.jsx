import { SiAbstract } from "react-icons/si";
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <>
            <footer className="mt-12 w-full">
                <div className="bg-black text-white p-12 px-[5%] flex items-start w-full justify-around text-sm flex-col  md:flex-row">
                    <div className="">
                        <h3 className="font-extrabold text-xl mb-3 mt-4">Abstract</h3>
                        <p>Branches</p>
                    </div>
                    <div className="">
                        <h3 className="font-extrabold text-xl mb-3 mt-4">Abstract</h3>
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Release Notes</p>
                        <p>Status</p>
                    </div>
                    <div className="">
                        <h3 className="font-extrabold text-xl mb-3 mt-4">Abstract</h3>
                        <p>Twitter</p>
                        <p>Linkedin</p>
                        <p>Facebook</p>
                        <p>Dribble</p>
                        <p>Podcast</p>
                    </div>
                    <div className="">
                        <h3 className="font-extrabold text-xl mb-3 mt-4">Abstract</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Legal</p>
                        <h4 className="mt-4 text-lg font-bold">Contact Us</h4>
                        <p>info@abstract.com</p>
                    </div>
                    <div className="md:mt-32 mt-6">
                        <IconContext.Provider value={ { color: "white", size: '2em' } }>
                            <div className="mb-3">
                                <SiAbstract />
                            </div>
                        </IconContext.Provider>
                        © Copyright 2022
                        <br />
                        Abstract Studio Design, Inc.
                        <br />
                        All rights reserved
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;