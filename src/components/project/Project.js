import React, { useEffect } from "react";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../../store/PostSlice";
import Loader from "../Loader/Loader";
import { variants } from "../../App";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const dispatch = useDispatch();
  const { cats, isLoading } = useSelector((state) => state.PostSlice);
  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div>
      {cats &&
        cats.map((cat) => (
          <Container variant={variants.card} key={cat.id}>
            <ProjectCard cardInfo={cat} />
          </Container>
        ))}
    </div>
  );
};

export default Project;
