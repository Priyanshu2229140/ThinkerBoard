import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import RateLimitterUI from "../components/RateLimitterUI.jsx";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/notes");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes;
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitterUI />}
    </div>
  );
};

export default HomePage;
