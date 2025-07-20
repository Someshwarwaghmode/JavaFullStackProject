import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "./Card";
import { useState } from "react";

const CarosuelCard = ({data,sectionName}) => {
  const [activeIndex, SetActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1.5 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const slidepre = () => SetActiveIndex(activeIndex - 1);
  const slidenext = () => SetActiveIndex(activeIndex + 1);
  const syncActiveIndex = (e) => SetActiveIndex(e.item);
  console.log(activeIndex);
  const items = data.slice(1, 10).map((product) => <Card key={product.id} product={product} />);

  return (
    <div className="p-[0rem] relative px-4 lg:px-8 m-auto">
      <h1 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h1>
      <div className="p-[1rem] relative">
        <AliceCarousel
          key={activeIndex}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length-5 && <Button 
          onClick={slidenext}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "9rem",
            right: "0rem",
            transform: "translateX(30%) rotate(90deg)",
            backgroundColor: "white",
            color:"black"
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>}

        {activeIndex !== 0 &&
          <Button
          onClick={slidepre}
          variant="contained"
          className="z-50"
          sx={{
            backgroundColor:"white",
            color:"black",
            position: "absolute",
            top: "9rem",
            left: "0",
            transform: "translateX(-50%) rotate(-90deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
        }
      </div>
    </div>
  );
};

export default CarosuelCard;
