import React, { useState, useEffect } from 'react';
import './style.css';
import house from '../Images/image.png';
import logo from '../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faHouse, faImages, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import building1 from '../Images/Building1.jpg';
import building2 from '../Images/Building2.jpg';
import building3 from '../Images/Building3.jpg';
import building5 from '../Images/Building5.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import quotation from '../Images/quotation.jpg';
import masterplan from '../Images/masterplan.jpg';
import bhk from '../Images/2bhk.jpeg';
import bhk1 from '../Images/2bhk1.jpeg';
import bhk2 from '../Images/2bhk2.jpg';
import bhk3 from '../Images/2bhk3.jpg';
import bhk4 from '../Images/2bhk4.png';
import bhk5 from '../Images/2bhk5.jpg';
import gym from '../Images/Gymnasium.jpg';
import meditation from '../Images/meditation.jpg';
import swimmingpool from '../Images/swimming-pool.jpg';
import waterslide from '../Images/water-slide.jpg';
import rooftop from '../Images/rooftop.jpg';
import ayurveda from '../Images/ayurveda.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import map from '../Images/map.png';
import location from '../Images/location.png';
import scanner from '../Images/qr-codes-svgrepo-com.png';
import swal from 'sweetalert';



const images = [
    building2, building3, building5, building1
];

function Dashboard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) {
            swal("Oops!", "Please fill in all the fields!", "error");
            return;
        }
        swal("Success!", "Your quote request has been submitted!", "success");
        setFormData({ name: '', email: '', phone: '' });
    };

    const handleToggle = () => {
        setShowMore(prev => !prev);
    };

    const nextImage = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);



    const cards = [
        { id: 1, title: "GYMNASIUM", image: gym },
        { id: 2, title: "MEDITATION AREA", image: meditation },
        { id: 3, title: "SWIMMING POOL", image: swimmingpool },
        { id: 4, title: "WATER SLIDE", image: waterslide },
        { id: 5, title: "ROOFTOP SKY LOUNGE", image: rooftop },
        { id: 6, title: "AYURVEDA CENTER", image: ayurveda },
    ];


    return (
        <>
            <div className="container-main">
                <div className="container1" style={{ padding: "0px" }}>
                    <nav className="navbar">
                        <img src={house} alt="" className='house' />
                        <img src={logo} alt="" className='logo' />
                        <FontAwesomeIcon icon={faHouse} />
                        <a href="#price" className='price'
                            style={{ borderLeft: "1px solid silver", borderRight: "1px solid silver", padding: "5px" }}>
                            <i className='bi bi-cash-coin' style={{ marginTop: "10px" }}></i>
                            <span style={{ fontSize: "14px", marginLeft: "5px" }}>Price</span>
                        </a>
                        <a href="#floor-plan" className='plan'>
                            <i className="bi bi-buildings"></i>
                            <span style={{ fontSize: "14px", marginLeft: "5px" }}>Site & Floor Plan</span>
                        </a>
                        <a href="#amenities" className='amenities'
                            style={{ borderLeft: "1px solid silver", borderRight: "1px solid silver", padding: "5px" }}>
                            <i className='bi bi-wifi'></i>
                            <span style={{ fontSize: "14px", marginLeft: "5px" }}>Amenities</span>
                        </a>
                        <a href="#gallery" className='gallery'>
                            <FontAwesomeIcon icon={faImages} style={{ fontSize: "18px" }} />
                            <span style={{ fontSize: "14px", marginLeft: "5px" }}>Gallery</span>
                        </a>
                        <a href="#map" className='map1' style={{ borderLeft: "1px solid silver", borderRight: "1px solid silver", padding: "5px" }}>
                            <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "18px" }} />
                            <span style={{ fontSize: "14px", marginLeft: "5px" }}>Location</span>
                        </a>
                        <a href="#virtual" className='virtual'>
                            <i className='bi bi-youtube'></i>
                            <span style={{ fontSize: "14px", marginLeft: "5px" }}>Virtual Site Visit</span>
                        </a>
                        <a href="#welcome" className='welcome'
                            style={{ borderLeft: "1px solid silver", borderRight: "1px solid silver", padding: "5px" }}>
                            <i className='bi bi-download'></i>
                            <span style={{ fontSize: "14px", marginLeft: "5px" }}>Download Brochure</span>
                        </a>
                    </nav>

                    <div className="carousel">
                        <div className="carousel-images">
                            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                        </div>
                    </div>

                    <div className="info-div" id='welcome'>
                        <span style={{ fontSize: "32px", fontWeight: "600", color: "#96065f" }}>Welcome to Sai World City</span>
                        <p>
                            Amid the lush foliage and natural landscapes of Panvel lies Sai World City - a majestic township estate that is nothing short of a heavenly paradise! Its soaring towers feature 2, 2.5, 3, & 4 BHK luxe apartments & lush landscaping in the form of green parks, courtyards, and terrace gardens. More than 25 luxury amenities such as a swimming pool, children’s play area, tennis court, yoga/meditation zone, indoor games, temple, multipurpose sports court, seating area, volleyball court, dry fountain and more ensure that every convenience is at your doorstep!
                        </p>

                        {showMore && (
                            <p>
                                The standout feature is that the township is merely 5 minutes from the upcoming Navi Mumbai International Airport! The property is right at the Palaspe Phata and is close to the Mumbai - Pune Expressway (2 mins) and Panvel Railway Station (7 mins). Naturally, this neighbourhood is dotted with some fine landmarks - DMart, DPS School, Orion Mall, and Lifeline hospital are all within 10 minutes. Overall - Sai World City is your one-stop destination, offering the futuristic comforts of a city along with the rejuvenating terrains of the peaceful countryside.
                            </p>
                        )}

                        <button onClick={handleToggle} style={{ color: "#96065f", background: "none", border: "none", fontWeight: "bold", cursor: "pointer" }}>
                            {showMore ? 'Read Less' : 'Read More'}
                        </button>


                        <button className='instant-call-btn' style={{ marginTop: "20px", width: "200px" }}><i className='bi bi-download'></i> Download Brochure</button>
                    </div>

                    <div className="table-div" id='price'>
                        <div className="table-container">
                            <span style={{ fontSize: "32px", fontWeight: "600", color: "#96065f" }}>Price</span>
                            <table className='table table-bordered table-sm table-hover'>
                                <thead>
                                    <tr>
                                        <th style={{ color: "rgb(71, 70, 70)", padding: "10px" }}>Type</th>
                                        <th style={{ color: "rgb(71, 70, 70)", padding: "10px" }}>Carpet Area</th>
                                        <th style={{ color: "rgb(71, 70, 70)", padding: "10px" }}>Price</th>
                                        <th style={{ color: "rgb(71, 70, 70)", padding: "10px" }}>Tower</th>
                                        <th style={{ color: "rgb(71, 70, 70)", padding: "10px" }}>Price Breakup</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>2 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>610 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 95 Lacs Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 3</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>2 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>713 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 99 Lacs Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 2</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>2 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>800 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 1.19 Cr Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 2</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>2 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>878 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 1.30 Cr Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 1</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>2 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>931 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 1.37 Cr Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 1</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>2.5 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>972 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 1.43 Cr Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 3</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>3 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>1096 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 1.60 Cr Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 3</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>3 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>1190 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 1.72 Cr Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 1</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>4 BHK</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>1920 Sq. ft.</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}><i class="bi bi-currency-rupee"></i> 2.72 Cr Onwards</td>
                                        <td style={{ color: "rgb(102, 101, 101)", textAlign: "center", paddingTop: "15px" }}>Phase 1</td>
                                        <td style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <button className='instant-call-btn' id='table-btn'>Price Breakup</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="costing-detail">
                            <div className="image-container">
                                <img src={quotation} alt="" className="costing-img" />
                                <div className="hover-overlay">
                                    <button className="enquiry-btn">Enquiry Now</button>
                                </div>
                            </div>
                            <button className='instant-call-btn' id='costing-detail'>Complete Costing Details</button>
                        </div>
                    </div>

                    <div className="info-div" id='floor-plan'>
                        <span style={{ fontSize: "32px", fontWeight: "600", color: "#96065f" }}>Site & Floor Plan of Sai World City</span>
                        <br />
                        <span style={{ fontWeight: "700", fontSize: "18px" }}>Master Plan</span>
                        <div className="master-plan">
                            <div className="image-container" id='img-container'>
                                <img src={masterplan} alt="" className="costing-img" />
                                <div className="hover-overlay">
                                    <button className="enquiry-btn">View Master Plan</button>
                                </div>
                            </div>
                        </div>

                        <br />
                        <span style={{ fontWeight: "700", fontSize: "18px" }}>Floor Plan</span>
                        <div className="floor-plan">
                            <div className="costing-detail">
                                <div className="image-container" id='img-container'>
                                    <img src={bhk} alt="" className="costing-img" />
                                    <div className="hover-overlay">
                                        <button className="enquiry-btn">Enquiry Now</button>
                                    </div>
                                </div>
                                <div>
                                    <button className='instant-call-btn' id='costing-detail'>2 BHK-610 Sq.ft.</button>
                                </div>
                            </div>

                            <div className="costing-detail">
                                <div className="image-container" id='img-container'>
                                    <img src={bhk1} alt="" className="costing-img" />
                                    <div className="hover-overlay">
                                        <button className="enquiry-btn">Enquiry Now</button>
                                    </div>
                                </div>
                                <button className='instant-call-btn' id='costing-detail'>2BHK-713 Sq.ft.</button>
                            </div>

                            <div className="costing-detail">
                                <div className="image-container" id='img-container'>
                                    <img src={bhk2} alt="" className="costing-img" />
                                    <div className="hover-overlay">
                                        <button className="enquiry-btn">Enquiry Now</button>
                                    </div>
                                </div>
                                <button className='instant-call-btn' id='costing-detail'>2BHK-972 Sq.ft.</button>
                            </div>

                            <div className="costing-detail">
                                <div className="image-container" id='img-container'>
                                    <img src={bhk3} alt="" className="costing-img" />
                                    <div className="hover-overlay">
                                        <button className="enquiry-btn">Enquiry Now</button>
                                    </div>
                                </div>
                                <button className='instant-call-btn' id='costing-detail'>2BHK-800 Sq.ft.</button>
                            </div>

                            <div className="costing-detail">
                                <div className="image-container" id='img-container'>
                                    <img src={bhk4} alt="" className="costing-img" />
                                    <div className="hover-overlay">
                                        <button className="enquiry-btn">Enquiry Now</button>
                                    </div>
                                </div>
                                <button className='instant-call-btn' id='costing-detail'>2BHK-878 Sq.ft.</button>
                            </div>

                            <div className="costing-detail">
                                <div className="image-container" id='img-container'>
                                    <img src={bhk5} alt="" className="costing-img" />
                                    <div className="hover-overlay">
                                        <button className="enquiry-btn">Enquiry Now</button>
                                    </div>
                                </div>
                                <button className='instant-call-btn' id='costing-detail'>2BHK-931 Sq.ft.</button>
                            </div>
                        </div>
                    </div>

                    <div className="info-div" id='amenities'>
                        <span style={{ fontSize: "32px", fontWeight: "600", color: "#96065f" }}>Amenities of Sai World City</span>
                        <button className='instant-call-btn' style={{ marginTop: "20px", width: "200px", marginBottom: "10px" }}> Download Amenities</button>

                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={3000}
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            centerMode
                            centerSlidePercentage={33.33}
                        >
                            {cards.map((card) => (
                                <div key={card.id} className="card image-container">
                                    <img src={card.image} alt={card.title} style={{ height: "200px", objectFit: "cover" }} />
                                    <div style={{ padding: "10px", borderTop: "1px solid silver" }}>
                                        <b>{card.title}</b>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="info-div" id='gallery'>
                        <span style={{ fontSize: "32px", fontWeight: "600", color: "#96065f" }}>Gallery of Sai World City</span>
                        <button className='instant-call-btn' style={{ marginTop: "20px", width: "200px", marginBottom: "10px" }}> Download Gallery</button>


                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={3000}
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            centerMode
                            centerSlidePercentage={33.33}
                        >
                            {cards.map((card) => (
                                <div key={card.id} className="card image-container">
                                    <img src={card.image} alt={card.title} style={{ height: "200px", objectFit: "cover" }} />
                                    <div style={{ padding: "10px", borderTop: "1px solid silver" }}>
                                        <b>{card.title}</b>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="info-div" id='map'>
                        <span style={{ fontSize: "32px", fontWeight: "600", color: "#96065f" }}>Address of Sai World City</span>
                        <div className="map-div">
                            <div className="map">
                                <span style={{ fontWeight: "700", fontSize: "18px" }}>Map View</span>
                                <img src={map} alt="" style={{ height: "100%", marginTop: "10px" }} />
                            </div>

                            <div className="location">
                                <span style={{ fontWeight: "700", fontSize: "18px" }}>Location Map</span>
                                <img src={location} alt="" style={{ height: "100%", border: "1px solid silver", marginTop: "10px" }} />
                            </div>
                        </div>

                        <div className="map-div" id='location-indicator'>
                            <div className="location-indicator">
                                <i className="bi bi-pin-map-fill" style={{ color: "#96065f", marginRight: "5px" }}></i>
                                <span style={{ fontWeight: "600" }}>Navi Mumbai International Airport - 5 min</span>
                            </div>

                            <div className="location-indicator">
                                <i className="bi bi-pin-map-fill" style={{ color: "#96065f", marginRight: "5px" }}></i>
                                <span style={{ fontWeight: "600" }}>Mumbai- Pune Expressway- 2 min</span>
                            </div>

                            <div className="location-indicator">
                                <i className="bi bi-pin-map-fill" style={{ color: "#96065f", marginRight: "5px" }}></i>
                                <span style={{ fontWeight: "600" }}> Panvel Railway Station- 7 min</span>
                            </div>
                        </div>

                        <div className="map-div" id='location-indicator'>
                            <div className="location-indicator">
                                <i className="bi bi-pin-map-fill" style={{ color: "#96065f", marginRight: "5px" }}></i>
                                <span style={{ fontWeight: "600" }}> Mumbai Trans Harbour Link( MTHL)- 15 min</span>
                            </div>

                            <div className="location-indicator">
                                <i className="bi bi-pin-map-fill" style={{ color: "#96065f", marginRight: "5px" }}></i>
                                <span style={{ fontWeight: "600" }}> Delhi Public School- 5 min</span>
                            </div>

                            <div className="location-indicator">
                                <i className="bi bi-pin-map-fill" style={{ color: "#96065f", marginRight: "5px" }}></i>
                                <span style={{ fontWeight: "600" }}> Sewri Nhava-Sheva Sea Link- 20 min</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-div" id='virtual'>
                        <span style={{ fontSize: "32px", fontWeight: "600", color: "#96065f" }}>Virtual Tour Request</span>
                        <img src={building2} alt="" style={{ width: "100%" }} />
                    </div>

                    <div className="info-div">
                        <div className="logo-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={logo} alt="" style={{ height: "70px" }} />
                        </div>

                        <span style={{ fontWeight: "700", fontSize: "18px" }}>About Paradise Group</span>
                        <button className='instant-call-btn' style={{ marginTop: "20px", marginBottom: "10px" }}>Chat with us</button>
                        <p>Founded in 1990, Paradise Group develops luxury residential properties & retail malls across the emerging locales of Mumbai & Navi Mumbai. With a firm presence in suburbs such as Kalyan, Chembur, Dombivli, Kharghar, Taloja, & Panvel, the company has built a good niche for itself in the city through the years.</p>

                        <span style={{ fontWeight: "700", fontSize: "14px" }}>RERA Information</span>
                        <div className="map-div">
                            <div className="map" id='scanner'>
                                <img src={scanner} alt="" style={{ width: "40%" }} />
                                <span style={{ marginTop: "10px", fontWeight: "500" }}>Sai World City Phase I</span>
                                <span>MahaRERA - <b>P52000006318</b></span>
                            </div>

                            <div className="map" id='scanner'>
                                <img src={scanner} alt="" style={{ width: "40%" }} />
                                <span style={{ marginTop: "10px", fontWeight: "500" }}>Sai World City Phase II</span>
                                <span>MahaRERA - <b>P52000006318</b></span>
                            </div>
                        </div>
                    </div>

                    <div className="info-div">
                        <span style={{ fontWeight: "700", fontSize: "18px", marginBottom: "20px" }}>About HouseBazaar</span>
                        <p>Housebazaar, an esteemed initiative of HomeBazaar.com, operates as a dedicated platform exclusively designed to promote our esteemed partner brands. With a commitment to facilitating effective and transparent promotion, our platform empowers brands to efficiently reach their target audience. Through a comprehensive range of tools, including targeted advertising campaigns and data-driven analytics, Housebazaar equips brands with the essential resources needed to optimize their promotional endeavours and drive substantial growth.</p>
                    </div>

                    <div className="info-div">
                        <b style={{ fontSize: "10px" }}>Disclaimer:</b>
                        <p style={{ fontSize: "10px" }}> We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.</p>

                        <div className="map-div" id='footer' style={{ alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ fontSize: "12px" }}>Contact Us at - #2304, Cyber One, Sector 30(A), Vashi, Navi Mumbai - 400703</p>
                            <p style={{ fontSize: "12px" }}>© Copyright</p>
                            <p style={{ fontSize: "12px" }} className='terms'>Terms & Conditions | Privacy Policy | Cookies Policy</p>
                        </div>
                    </div>
                </div>

                <div className="container2">
                    <div className="upper-right">
                        <div className="register">
                            <button className='register-btn'>Pre Register</button>
                            <button className='register-call-btn'><FontAwesomeIcon icon={faPhoneVolume} /> +91 9999999999</button>
                        </div>
                        <button className='instant-call-btn'><FontAwesomeIcon icon={faPhoneVolume} /> Instant Call Back</button>
                    </div>
                    <div className="contact-us">
                        <span style={{ fontWeight: "600", fontSize: "18px" }}>Get The Best Quote</span>
                        <form onSubmit={handleSubmit}>
                            <div className="fields">
                                <div className="input-field">
                                    <input type="text" placeholder='Name' name="name" value={formData.name}
                                        onChange={handleChange} />
                                </div>

                                <div className="input-field">
                                    <input type="email" placeholder='Email Address' name="email" value={formData.email}
                                        onChange={handleChange} />
                                </div>

                                <div className="input-field">
                                    <input type="tel" placeholder='Phone number' name="phone" value={formData.phone}
                                        onChange={handleChange} />
                                </div>

                                <button className='instant-call-btn' style={{ marginTop: "20px" }}
                                type="submit">Get It Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;