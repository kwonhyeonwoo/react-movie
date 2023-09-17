import React, { useState } from "react";
import { SearchType, SearchContainer, PosterImage } from "./style";
import { makeImagePath } from "../../../utils";
import Modal from "../../Modal/Modal";
import { PdWrapper } from "../../common/Wrapper/PdWrapper";
import { MovieLiTitle } from "../../common/MovieLiTitle/MovieLiTitle";
interface IResults {
    backdrop_path: string;
    poster_path: string;
    title: string;
    name: string;
    original_title?: string;
    overview: string;
    id: number;
}
interface ICommonMovieInfo {
    backdrop_path: string;
    poster_path: string;
    title: string;
}

interface ISearchResults {
    data: {
        results: IResults[];
    };
    searchType: string;
}
const SearchList = ({ searchType, data }: ISearchResults) => {
    const [movieInfo, setMovieInfo] = useState<ICommonMovieInfo | null>(null);
    // movie information toggle
    const movieInforToggle = (item?: ICommonMovieInfo) => {
        // item 매개변수로 전달을 받고 클릭 했는 영화정보를 가져옴
        if (item) {
            setMovieInfo(item);
        } else {
            setMovieInfo(null);
        }
    }
    return (
        <PdWrapper>
            {movieInfo && <Modal data={movieInfo} onClick={() => movieInforToggle()} />}
            <SearchType>{searchType}</SearchType>
            <SearchContainer>
                {data?.results.map((item: IResults) => (
                    <div onClick={() => movieInforToggle(item)}>
                        <PosterImage
                            bgImg={makeImagePath(
                                item.backdrop_path || item.poster_path,
                                "w500"
                            )}
                        >
                            <MovieLiTitle>
                                {item.title ? item.title : item.name}
                            </MovieLiTitle>
                        </PosterImage>
                    </div>

                ))}

            </SearchContainer>
        </PdWrapper>
    )
}

export default SearchList;