import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import landingPageVideo from '../assets/home_vdo/5.mp4';
import teamImage from '../assets/gantavya2k24/images/16..jpg';
import eventImage from '../assets/gantavya2k24/images/16..jpg';
import leftSoccerBotImage from '../assets/home_vdo/image1.png'
import rightSoccerBotImage from '../assets/home_vdo/image2.png'

const Home = () => {
    const [page1Ref, page1InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [page2Ref, page2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [page5Ref, page5InView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="relative font-sans">
            {/* Video Background */}
            <video autoPlay loop muted src={landingPageVideo} className="absolute w-full h-screen object-cover -z-10"></video>

            {/* Page 1 */}
            <div ref={page1Ref} className={`flex items-center justify-center h-screen py-40 text-white bg-black bg-opacity-50 transition-all duration-500 ${page1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <img src={leftSoccerBotImage} alt="Left Soccer Bot" className="w-1/3 max-w-xs rounded-lg shadow-lg" />
    
    <div className="text-center mx-4">  {/* Centered content with margin */}
        <h1 className="text-8xl font-bold mb-4 animate-fadeIn text-gray-400">GROBOTS CLUB</h1>
        <h2 className="text-5xl mb-2 animate-slideIn">SRMCEM</h2>
        <h3 className="text-2xl mb-6 animate-fadeIn delay-500">Welcomes All Enthusiasts!</h3>
        <p className="px-4 max-w-2xl mx-auto">
            Welcome, robotics enthusiasts! Join us in exploring innovation, engineering marvels, and the limitless possibilities that robotics brings to our future!
        </p>
    </div>
    
    <img src={rightSoccerBotImage} alt="Right Soccer Bot" className="w-1/3 max-w-xs rounded-lg shadow-lg" />
</div>


            {/* Page 2 - About Us */}
            <div ref={page2Ref} className={`py-12 bg-gray-100 text-center transition-all duration-200 ${page2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl font-bold underline mb-6">About Us</h1>
                <h3 className="text-2xl mb-4">Grobots: Building Innovators, Leaders, and Creators in Robotics at SRMGPC</h3>
                <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
                    Grobots is SRMCEM's premier technical club, dedicated to fostering robotics excellence and technical prowess among students...
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-gray-700 text-2xl hover:text-blue-500 transition-transform transform hover:scale-110" /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-gray-700 text-2xl hover:text-blue-400 transition-transform transform hover:scale-110" /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className="text-gray-700 text-2xl hover:text-blue-600 transition-transform transform hover:scale-110" /></a>
                </div>
                <img src={teamImage} alt="Team" className="mt-8 w-4/5 max-w-lg mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" />
            </div>

            {/* Page 5 - Events */}
            <div ref={page5Ref} className={`py-12 bg-gray-200 text-center transition-all duration-200 ${page5InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl font-bold underline mb-6">Events</h1>
                <h3 className="text-2xl mb-4">Gantavya: SRMCEM's Premier Robotics Event</h3>
                <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
                    Organized exclusively by SRMCEM, Gantavya is the ultimate event for robotics enthusiasts...
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                    Register Now
                </button>
                <img src={eventImage} alt="Event Poster" className="mt-8 w-4/5 max-w-lg mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" />
            </div>

            {/* Contact Section */}
            <div ref={contactRef} className={`bg-gray-800 text-white py-12 flex flex-col items-center transition-all duration-200 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-wrap justify-center gap-8 mb-6">
                    <div className="w-full max-w-md">
                        <iframe 
                            src="https://www.google.com/maps/embed?..." 
                            className="w-full h-72 rounded-lg" 
                            allowFullScreen 
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="w-full max-w-md text-center">
                        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                        <form action="https://formsubmit.co/yashtiwarit67@gmail.com" method="POST" className="space-y-4">
                            <input type="text" name="Name" placeholder="Name" required className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-900" />
                            <input type="email" name="Mail" placeholder="Email" required className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-900" />
                            <input type="text" name="Subject" placeholder="Subject" required className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-900" />
                            <textarea name="Message" placeholder="Message" required className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-900"></textarea>
                            <button type="submit" className="px-6 py-2 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-all transform hover:scale-105">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
