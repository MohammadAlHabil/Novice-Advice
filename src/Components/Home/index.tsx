import React from "react";
import { ListAdvices } from "../index";
import { Favorite } from "../ListAdvices";

interface HomeProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  favorite: Favorite;
  setFavorite: React.Dispatch<React.SetStateAction<Favorite>>;
}

export default function Home({
  search,
  setSearch,
  favorite,
  setFavorite,
}: HomeProps) {
  return (
    <div>
      <ListAdvices
        search={search}
        setSearch={setSearch}
        favorite={favorite}
        setFavorite={setFavorite}
      />
    </div>
  );
}

Home.propTypes = {};
