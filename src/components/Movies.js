import { v4 as uuidv4 } from "uuid";

const Movies = [
  {
    id: uuidv4(),
    title: "John Wick: Chapter 2",
    description:
      "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life. ",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VZ6Un0Fn4RYJSjH6MLsKgEmICbWqxWbfOBjDxkKSD891Thuj",
    rating: 9,
    trailerURL: "https://www.youtube.com/embed/ChpLV9AMqm4?si=jFLkp03qtiem5LOF",
  },
  {
    id: uuidv4(),
    title: "Ted (2012)",
    description:
      "Tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Ted_%28film%29.png",
    rating: 6,
    trailerURL: "https://www.youtube.com/embed/1xSYmg_kpMY?si=UAT73HZjHr6rU-kC",
  },
  {
    id: uuidv4(),
    title: "Nowhere (2023)",
    description:
      "A young pregnant woman named Mia escapes from a country at war by hiding in a maritime container aboard a cargo ship.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Nowhere_%282023_film%29_poster.jpg/220px-Nowhere_%282023_film%29_poster.jpg",
    rating: 6,
    trailerURL: "https://www.youtube.com/embed/KDUtdcU10YA?si=g7-UkVfNHg7QyrT1",
  },
  {
    id: uuidv4(),
    title: "Ballerina",
    description:
      "Grieving the loss of a best friend she couldn't protect, an ex-bodyguard sets out to fulfill her dear friend's last wish: sweet revenge.",
    posterURL:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyK8-H_mVcZFeOQ00zM4Duuv1-bqTzIT4oI14BLS8VvfxnVi28",
    rating: 7,
    trailerURL: "https://www.youtube.com/embed/IhXfUTGVEUI?si=XoMtGNUX7ZkkH8LZ",
  },
];

export default Movies;
