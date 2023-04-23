import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";
import Pagination from "./Pagination";

const Section = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 20;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8f852cf536msh25307b990d7c6fap1c4006jsn1527afd2358e",
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
      },
    };

    fetch(
      `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${search}`,
      options
    )
      .then((response) => response.ok && response.json())
      .then((data) => data.length > 0 && setPosts(data))
      .catch((err) => console.log(err));
  }, [search]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePost = currentPosts.map((post) => {
    return <Card key={post.id} img={post.img} name={post.breed} />;
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const paginate = (e, number) =>{
    setCurrentPage(number)
  }

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
      <div className="section__body">
        <div className="cards--container">
          {posts.length === 0 && <h2>Explore Our Collection</h2>}
          {posts.length > 0 && handlePost}
        </div>
          <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </section>
  );
};

export default Section;
