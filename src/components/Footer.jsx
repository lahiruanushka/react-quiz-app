function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white text-center py-4 text-sm">
        © {currentYear} Quiz App
      </footer>
    );
  }
  
  export default Footer;
  