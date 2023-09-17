import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Loader, Wrapper } from "../Home/style";
import { ResultSearch, SearchContainer } from "./style";
import SearchList from "./components/SearchList";
import { searchMovie, searchTv } from "../../api/searchApi";

const Search = () => {
    const [searchParams, _] = useSearchParams();
    const keyword = searchParams.get('keyword');

    // search movie 
    const { data, isLoading } = useQuery(['search', 'movies'],
        () => searchMovie(keyword!),
        { enabled: !!keyword },
    );

    // search tv
    const { data: tvSearch, isLoading: tvLoading } = useQuery(['tvsearch', 'tv'],
        () => searchTv(keyword!),
        { enabled: !!keyword }
    );
    return (
        <Wrapper>
            <SearchContainer>
                {isLoading && tvLoading ? <Loader>loading...</Loader> :
                    <>
                        <ResultSearch>
                            <p className='result'>Result of searching with</p>
                            <p className='keyword'>{keyword}</p>
                        </ResultSearch>

                        {/* 영화 검색 */}
                        <SearchList
                            searchType='📽️Movie'
                            data={data}
                        />

                        {/* Tv 검색 */}
                        <SearchList
                            searchType='📺Series'
                            data={tvSearch}
                        />
                    </>
                }
            </SearchContainer>

        </Wrapper>
    )
}

export default Search;