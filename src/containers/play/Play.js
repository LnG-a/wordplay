import React, { useEffect, useState } from "react";
import styled from "styled-components";
import alphabetImgList from "./GetAlphabetImg";
import { Wrapper, isAsked } from "../main/Main";
// import AlphabetBtn from "./AlphabetBtn";

const Playground = styled.div`
  width: 90vw;
  height: 90vh;
  background: red;
  display: flex;
  flex-diretion: row;
`;

const Pickem = styled.div`
  height: 100vh;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const ToPick = styled.div`
  display: flex;
  flex-direction: row;
`;

const Picked = styled.div`
  display: flex;
  flex-direction: row;
`;

const AlphabetBut = styled.img`
  height: 100%;
  width: 13%;
`;

const questions = [
  {
    img: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-1294547052.jpg?resize=1200,630",
    answer: "dog",
  },
  {
    img: "https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg",
    answer: "cat",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYhiyLQALSlro-veVCoXmnuA4UnteIvxyeQ&usqp=CAU",
    answer: "clock",
  },
  {
    img: "https://img.resized.co/breaking-news/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5icmVha2luZ25ld3MuaWVcXFwvcHJvZFxcXC9CTl8xMDIwNzg4XzEwMDAwXzY1MjFfMF8xMTY1NVxcXC9JRS1NQUlOXFxcL0ZFQVRVUkVcXFwvMjAyMFxcXC8wOFxcXC8xMFxcXC9ibi0xMDEzNjM0XFxcL2JuLTEwMTM2MzRfNmQzZTliOWZhMGJmNGFhNGI2ZWM5OTYwYTc4YWZjN2UuanBnXCIsXCJ3aWR0aFwiOjEyMDAsXCJoZWlnaHRcIjo2MjcsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5icmVha2luZ25ld3MuaWVcXFwvaW1hZ2VzXFxcL25vLWltYWdlLnBuZ1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI4YWQ4YWQ2OWM4MTg4OWJkNTE4M2MyZjc0YjdiMzcxZWUyNjgxMTg4In0=/world-lion-day-9-things-you-never-knew-about-these-iconic-big-cats.jpg",
    answer: "lion",
  },
  {
    img: "https://m.media-amazon.com/images/I/51ZBJbJNQcL._AC_UF894,1000_QL80_.jpg",
    answer: "ruler",
  },
  {
    img: "https://salt.tikicdn.com/ts/product/24/02/f3/b2360a6b54b6080db01f2f43be87ca60.jpeg",
    answer: "pencil",
  },
  {
    img: "https://img.freepik.com/free-photo/white-horse-runs-beach_1340-34263.jpg?size=626&ext=jpg&ga=GA1.1.541449757.1696550400&semt=ais",
    answer: "horse",
  },
  {
    img: "https://i.natgeofe.com/n/04fcf985-fc13-4dd3-ac21-03ad540915c1/0000016c-25c4-d982-a7ff-fdf7352c0000_3x2.jpg",
    answer: "bear",
  },
  {
    img: "https://media.gettyimages.com/id/519225039/photo/turle-in-the-surf.jpg?s=1024x1024&w=gi&k=20&c=zUJRJS6l5Ay6tJvFTAl5boyMo9yllkyhM0TPm8TkYwY=",
    answer: "turtle",
  },
  {
    img: "https://media.cnn.com/api/v1/images/stellar/prod/230712115127-white-tailed-deer-file.jpg?c=16x9&q=h_720,w_1280,c_fill",
    answer: "deer",
  },
  {
    img: "https://www.topgear.com/sites/default/files/2022/07/6_0.jpg",
    answer: "car",
  },
  {
    img: "https://images.ctfassets.net/cnu0m8re1exe/4txgybYHtUH0z6Dy9IIFGH/e9f4612ef512ae7ad8a580a39557e4d2/Glass_Frog.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
    answer: "frog",
  },
  {
    img: "https://wolfcenter.org/wp-content/uploads/2021/04/preview-full-red-fox-portrait-1080x675.jpg",
    answer: "fox",
  },
  {
    img: "https://easydrawingguides.com/wp-content/uploads/2023/05/how-to-draw-a-plane-featured-image-1200.png",
    answer: "plane",
  },
  {
    img: "https://cdn11.bigcommerce.com/s-fj5u5hhzyb/images/stencil/1280x1280/products/27344/15554/NEW_Boucle_Occasional_Chair_Lores_01__99432.1675195686.jpg?c=1",
    answer: "chair",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/2020-03-10-use-a-drill-final-clean-00-01-57-10-still053-1584632505.jpg?crop=1xw:1xh;center,top&resize=1200:*",
    answer: "drill",
  },
  {
    img: "https://images.unsplash.com/photo-1504253163759-c23fccaebb55?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    answer: "cloud",
  },
  {
    img: "https://m.media-amazon.com/images/I/611zcTURLsL._AC_UF894,1000_QL80_.jpg",
    answer: "speaker",
  },
  {
    img: "https://m.media-amazon.com/images/I/61qkoldpK+L._AC_UF894,1000_QL80_.jpg",
    answer: "stapler",
  },
  {
    img: "https://www.zarebasystems.com/media/wysiwyg/zs/cms/learning-center/zs-lc-electric-fencing-for-bulls.jpg",
    answer: "bull",
  },
];

const rand = Math.random();

let quesId = Math.floor(Math.random() * 11);
while (isAsked[quesId] === true) {
  quesId = Math.floor(rand * 11);
}

isAsked[quesId] = true;

// const Play = () => {
//   const [isVisible, setIsVisible] = useState(
//     Array(questions[quesId].answer.length).fill(true)
//   );
//   const [toPickArr, setToPickArr] = useState([]);
//   const [pickedArr, setPickedArr] = useState([]);

//   const ToggleVisible = (index) => {
//     setIsVisible((prevVisibility) => {
//       const updatedVisibility = [...prevVisibility];
//       updatedVisibility[index] = !updatedVisibility[index]; // Toggle visibility
//       return updatedVisibility;
//     });

//     // const updatedPickedArr = [...pickedArr];
//     // console.log(updatedPickedArr);
//     // updatedPickedArr[index] = toPickArr[index];
//     // setPickedArr(updatedPickedArr);

//     console.log(toPickArr);

//     setPickedArr((prevPickedArr) => {
//       const updatedPickedArr = [...prevPickedArr];
//       updatedPickedArr[index] = toPickArr[index];
//       console.log(toPickArr);
//       return updatedPickedArr;
//     });
//   };

//   const shuffle = (array) => {
//     return array.sort(() => Math.random() - 0.3);
//   };

//   useEffect(() => {
//     let init = [];
//     let init2 = [];

//     for (let i = 0; i < questions[quesId].answer.length; i++) {
//       //isVisible.push(true);
//       init.push(
//         <AlphabetBut
//           src={alphabetImgList[questions[quesId].answer[i].toUpperCase()]}
//           alt={questions[quesId].answer[i].toUpperCase()}
//           onClick={() => ToggleVisible(i)}
//         />
//       );
//       init2.push(<AlphabetBut src={alphabetImgList["Emp"]} alt="Empty" />);
//     }

//     setToPickArr(shuffle(init));
//     setPickedArr(init2);
//   }, []);
const Play = () => {
  const [isVisible, setIsVisible] = useState(
    Array(questions[quesId].answer.length).fill(true)
  );
  const [toPickArr, setToPickArr] = useState([]);
  const [pickedArr, setPickedArr] = useState([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const ToggleVisible = (index) => {
    setIsVisible((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = false; // Toggle visibility
      return updatedVisibility;
    });

    setSelectedButtonIndex((prevIndex) => {
      let updatedIndex = prevIndex;
      updatedIndex += 1; // Toggle visibility
      return updatedIndex;
    });
  };

  console.log(selectedButtonIndex);
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.3);
  };

  useEffect(() => {
    let init = [];
    let init2 = [];

    for (let i = 0; i < questions[quesId].answer.length; i++) {
      init.push(
        <AlphabetBut
          src={alphabetImgList[questions[quesId].answer[i].toUpperCase()]}
          alt={questions[quesId].answer[i].toUpperCase()}
          onClick={() => ToggleVisible(i)}
        />
      );
      init2.push(<AlphabetBut src={alphabetImgList["Emp"]} alt="Empty" />);
    }

    setToPickArr(shuffle(init));
    setPickedArr(init2);
  }, []);

  useEffect(() => {
    if (selectedButtonIndex !== null) {
      setPickedArr((prevPickedArr) => {
        const updatedPickedArr = [...prevPickedArr];
        updatedPickedArr[selectedButtonIndex] = toPickArr[selectedButtonIndex];
        return updatedPickedArr;
      });

      //console.log(selectedButtonIndex);
      // Reset the selectedButtonIndex state variable
      // const replaceIndex = selectedButtonIndex + 1;
      // setSelectedButtonIndex(null);
    }
  }, [selectedButtonIndex]);

  return (
    <Wrapper>
      <Playground>
        <Pickem>
          <ToPick>
            {toPickArr.map((item, index) => {
              if (isVisible[index]) return item;
              return null;
            })}
          </ToPick>
          <Picked>{pickedArr}</Picked>
        </Pickem>
        <img
          src={questions[quesId].img}
          alt="things to guess"
          style={{ width: "40%" }}
        />
      </Playground>
    </Wrapper>
  );
};

export default Play;
