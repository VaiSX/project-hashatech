import React, { useState } from "react";
import pdf1 from '../Downloadables/blank.pdf'
import pdf2 from '../Downloadables/blank2.pdf'
import pdf3 from '../Downloadables/blank3.pdf'
import dwnd from '../icons/download2.png'
import pdfI from '../icons/pdfIcon.png'
import './downloads.scss';
import ReCAPTCHA from "react-google-recaptcha";


const Downloads = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [pdfName, setPdfName] = useState('');
    const [formVisible, setFormVisible] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recaptchaToken) {
            alert("Please complete the reCAPTCHA verification.");
            return;
        }

        console.log(formData);

        const link = document.createElement('a');
        link.href = pdfName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleToggleFormOn = (pdfURL) => {
        setPdfName(pdfURL);
        setFormVisible(true);
    };

    const handleToggleFormOff = () => {
        setPdfName('');
        setFormVisible(false);
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    return (
        <>
            {formVisible && (
                <div className="pdf-form">
                    <h2 onClick={handleToggleFormOff}>X</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <ReCAPTCHA
                            sitekey="6Leb85cpAAAAAKapAyGM3Gy2Pi4P2GUeAW_i194l"
                            onChange={handleRecaptchaChange}
                        />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
            <div className="downloads">
                <div className="downTop">
                    <h1>Downloads</h1>
                </div>
                <div className="downMain">
                    <div className="pdfInfo">
                        <div className="pdf-left">
                            <img src={pdfI} alt="PDF Icon" />
                            <span>PDF NAME 1</span>
                        </div>
                        <div className="pdf-right">
                            <img onClick={(e) => handleToggleFormOn(pdf1)} src={dwnd} alt="Download Icon" />
                        </div>
                    </div>
                </div>
                <div className="downMain">
                    <div className="pdfInfo">
                        <div className="pdf-left">
                            <img src={pdfI} alt="PDF Icon" />
                            <span>PDF NAME 2</span>
                        </div>
                        <div className="pdf-right">
                            <img onClick={(e) => handleToggleFormOn(pdf2)} src={dwnd} alt="Download Icon" />
                        </div>
                    </div>
                </div>
                <div className="downMain">
                    <div className="pdfInfo">
                        <div className="pdf-left">
                            <img src={pdfI} alt="PDF Icon" />
                            <span>PDF NAME 3</span>
                        </div>
                        <div className="pdf-right">
                            <img onClick={(e) => handleToggleFormOn(pdf3)} src={dwnd} alt="Download Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Downloads;
