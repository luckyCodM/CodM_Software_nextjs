'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export const metadata = {
  title: "Contact Us Salesforce Implementation, Consulting Solutions",
  keywords: "Contact us Salesforce Implementation, Consulting Solutions",
};

export default function Section1() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        description: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Show popup
        setShowPopup(true);

        // Clear form fields
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            company: '',
            description: '',
        });

        // Hide popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);

        // Submit form to Salesforce (native HTML submission)
        (e.target as HTMLFormElement).submit();
    };

    return (
        <div className="contact-page sp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="heading1">
                            <span className="span">Contact Us</span>
                            <h2>Get in Touch Let's Start the Conversation</h2>
                            <div className="space16"></div>
                            <p>We would love to speak with you. Feel free to reach out using the below details.</p>
                        </div>

                        <div className="contact-page-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon1.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Call us</p>
                                            <h4><Link href="tel:+91 9871717425">+91 9871717425</Link></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="contact-box contact-box2">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon2.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Mail us</p>
                                            <h4><Link href="mailto:hr@codmsoftware.com">sales@codmsoftware.com</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact1-form">
                            <div className="heading1">
                                <h3>Let’s Build Something Great
</h3>
                                <div className="space16"></div>
                                <p>Leave us a message and we'll get back to you as soon as possible.</p>
                            </div>
                            <div className="space10"></div>

                            <form
                                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                method="POST"
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="oid" value="00D5i000008yVNX" />
                                <input type="hidden" name="retURL" value="codmsoftware.com" />
                                <input type="hidden" name="lead_source" value="Web" />

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="first_name"
                                                placeholder="First Name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="last_name"
                                                placeholder="Last Name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="company"
                                                placeholder="Company Name"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <textarea
                                                rows={4}
                                                name="description"
                                                placeholder="Message"
                                                value={formData.description}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="button">
                                            <button type="submit" className="theme-btn1">
                                                Submit Now <span><i className="fa-solid fa-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Thank you!</h3>
                        <p>Your message has been submitted successfully. We’ll get back to you shortly.</p>
                    </div>
                </div>
            )}

            <style jsx>{`
                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 999;
                    animation: fadeIn 0.3s ease-in-out;
                }

                .popup-box {
                    background: #fff;
                    padding: 25px 35px;
                    border-radius: 12px;
                    text-align: center;
                    max-width: 400px;
                    box-shadow: 0 8px 25px #081120;
                    animation: scaleIn 0.3s ease-in-out;
                }

                .popup-box h3 {
                    margin-bottom: 10px;
                    color: #b7533a;
                }

                .popup-box p {
                    color: #555;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
}