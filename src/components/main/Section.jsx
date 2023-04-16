import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";

const Section = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8f852cf536msh25307b990d7c6fap1c4006jsn1527afd2358e",
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
      },
    };

    if (search) {
      fetch(
        `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${search}`,
        options
      )
        .then((response) => response.json())
        .then((response) => (response.length > 0 && setPosts(response)))
        .catch((err) => console.log(err));
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePost = posts.map((post) => {
    return <Card key={post.id} img={post.img} name={post.breed} />;
  });


  return (
    <section className="section">
      <div className="section_head">
        <h2>Available Breed</h2>
        <div className="search">
          <input
            type="search"
            name="search"
            className="search_input"
            id="search"
            value={search}
            onChange={handleChange}
            placeholder="Search for available Dogs"
          />
          <FaSearch className="search_icon" />
        </div>
      </div>
      <div className="cards--container">
        {posts.length === 0 && <h2>Explore Our Collection</h2>}
        {posts.length > 0 && handlePost}
      </div>
    </section>
  );
};

export default Section;
