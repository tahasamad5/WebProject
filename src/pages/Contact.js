import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Contact Us</h1>
        </div>
      </div>

      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}

      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  <i className="bi bi-send me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        
        <div className="col-lg-4 mb-4">
          <div className="card shadow mb-4">
            <div className="card-body">
              <h4 className="card-title mb-3">Get in Touch</h4>
              <div className="mb-3">
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                <strong>Address:</strong>
                <p className="ms-4 mb-0">Dahr Lchir<br/>Bakhoun,Danniyeh<br/>Lebanon</p>
              </div>
              <div className="mb-3">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                <strong>Phone:</strong>
                <p className="ms-4 mb-0">+961 71868913</p>
              </div>
              <div className="mb-3">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <strong>Email:</strong>
                <p className="ms-4 mb-0">52231356@students.liu.edu.lb</p>
              </div>
              <div className="mb-3">
                <i className="bi bi-clock-fill text-primary me-2"></i>
                <strong>Business Hours:</strong>
                <p className="ms-4 mb-0">
                  Monday - Friday: 9:00 AM - 6:00 PM<br/>
                  Saturday: 10:00 AM - 4:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>

    </div>
  );
}

export default Contact;
