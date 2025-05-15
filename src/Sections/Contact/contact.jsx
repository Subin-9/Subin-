import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './contactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    let timer;
    if (submitStatus === 'success'){
      timer= setTimeout(() => {
        setSubmitStatus(null);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Contact</h1>
        <p>Feel free to reach out for collaborations or questions!</p>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            required
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            required
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            required
          />
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={styles.submitBtn}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner} aria-hidden="true"></span>
              Sending...
            </>
          ) : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className={styles.successMessage} role="alert">
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
            </svg>
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={styles.errorMessage} role="alert">
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path fill="currentColor" d="M13 13H11V7H13M13 17H11V15H13M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z" />
            </svg>
            Failed to send message. Please try again or email me directly at subinghimire51@gmail.com
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;

