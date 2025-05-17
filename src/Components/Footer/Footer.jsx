import React from 'react';
function Footer() {
    return (
        <footer>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
                <p>© 2023 Your Company Name. All rights reserved.</p>
                <p>Follow us on:
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>        
                </p>
            </div>
        </footer>
    )
}
export default Footer;