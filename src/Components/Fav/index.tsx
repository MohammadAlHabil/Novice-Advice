import React from "react";
import AdviceCard from "../AdviceCard";
import { Favorite } from "../ListAdvices";
import "./Fav.css";

interface FavProps {
  favorite: Favorite;
  setFavorite: React.Dispatch<React.SetStateAction<Favorite>>;
  search: string;
}

export default function Fav({ favorite, setFavorite, search }: FavProps) {
  return (
    <div className="fav-content">
      {favorite.length ? (
        favorite.map((fav) => {
          return (
            <AdviceCard
              key={fav.id}
              advice={fav}
              search={search}
              favorite={favorite}
              setFavorite={setFavorite}
            />
          );
        })
      ) : (
        <div>There&apos;s no any item here</div>
      )}
    </div>
  );
}
