import React, { useState } from "react";
import classes from "./Project.module.css";

const ProjectCard = ({ cardInfo }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <img src={cardInfo.image} alt={cardInfo.title} className={classes.image} />
            <p>
                <strong>Наименование товара: </strong>
                {cardInfo.title}
            </p>
            <span>
        <strong>Цена:</strong> {cardInfo.price}
      </span>
            <button onClick={() => setIsOpen(!isOpen)}>MORE</button>
            {isOpen && (
                <p>
                    <strong>Описание: </strong> {cardInfo.description}
                </p>
            )}
        </div>
    );
};

export default ProjectCard;