import "./AdviceCard.css";
import React from "react";
import fav from "../../images/fav.svg";
import { Favorite, Slip } from "../ListAdvices";
import "boxicons";

interface AdviceCardProps {
  advice: Slip;
  search: string;
  favorite: Favorite;
  setFavorite: React.Dispatch<React.SetStateAction<Favorite>>;
}

export default function AdviceCard({
  advice,
  search,
  favorite,
  setFavorite,
}: AdviceCardProps) {
  let firstHtmlPart, secondHtmlPart;
  (function findAndColorWord() {
    const word = advice.advice;
    let indexWordStart = word.indexOf(search);
    let wordLength = search.length;

    firstHtmlPart = word.substring(0, indexWordStart - 1);
    secondHtmlPart = word.substring(
      indexWordStart + wordLength,
      word.length - 1
    );
  })();

  return (
    <li className="ListAdvices-item">
      <div>
        {firstHtmlPart}
        <span style={{ color: "red" }}>{" " + search}</span>
        {secondHtmlPart}
      </div>

      {favorite.filter((fav) => fav.advice === advice.advice).length ? (
        <div
          onClick={() => {
            favorite.splice(
              favorite.findIndex((fav) => fav.advice === advice.advice),
              1
            );
            localStorage.setItem("fav", JSON.stringify(favorite));
            setFavorite((favorite) => [...favorite]);
          }}
        >
          {/* @ts-ignore */}
          <box-icon name="heart" type="solid"></box-icon>
        </div>
      ) : (
        <div
          onClick={() => {
            setFavorite((prev) => [advice, ...prev]);
            localStorage.setItem("fav", JSON.stringify([advice, ...favorite]));
          }}
        >
          <img src={fav} alt="fav" />
        </div>
      )}
    </li>
  );
}
