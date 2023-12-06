

function GoogleMap() {
  const address = "817+Vandalia+St+Unit%233,St+Paul,Minnesota,55114";
  const googleMapURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25358.121244356647!2d-93.1925751830154!3d44.977072244949565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f7e20f20ebe10f%3A0x6515a1a2c5b3d191!2s${address}!5e0!3m2!1sen!2sus!4v1643280486743`;

  return (
    <iframe
      title="Google Map"
      width="100%"
      height="450"
     
      style={{ border: 0 }}
      src={googleMapURL}
      allowFullScreen
    ></iframe>
  );
}

export default GoogleMap;
