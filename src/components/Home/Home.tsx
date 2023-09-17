
import { useQuery } from "@tanstack/react-query";
import { Banner, Loader, MovieInfo, OverView, PalyerWrapper, Player, Title, Wrapper } from "./style";
import { makeImagePath } from "../../utils";
import {
    faPlay,
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import Slider from "./components/Slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { getMovies, getPopular, getRetedTv } from "../../api/getApi";

export interface IMovie {
    original_title?: string;
    id?: number;
    backdrop_path: string;
    poster_path: string;
    title?: string;
    overview: string;
    name: string;
    page: string;
    vote_average?: number;
    first_air_date?: string;
    release_date?: string;

}

// dates, page, results, total_pages,
export interface IGetMoviesResult {
    dates?: {
        maximum: string;
        minimum: string;
    };
    page?: number;
    results?: IMovie[];
    vote_average?: number;
    first_air_date?: string;
    backdrop_path: string;
    release_date?: string;
    title: string;
    poster_path: string;
    overview?: string;

}
const Home = () => {
    // now play movie 
    const { data, isLoading } = useQuery(['movies', 'nowPlaying'], getMovies);

    // reted movie 
    const { data: RetedTv } = useQuery(['movies2', 'nowPlaying2'], getRetedTv);

    // popular movie
    const { data: Popular } = useQuery(['movies3', 'nowPlaying3'], getPopular);

    const [movieModal, setMovieModal] = useState<boolean>(false);

    const onMovieModalClick = () => {
        setMovieModal((prev) => !prev);
    }
    return (
        <Wrapper>
            {isLoading ? <Loader>Loading...</Loader> : (
                <>
                    {movieModal && <Modal onClick={onMovieModalClick} data={data?.results[0]} />}
                    <Banner imgUrl={makeImagePath(data?.results[0].backdrop_path || '')}>
                        <Title>{data?.results[0].title}</Title>
                        <OverView>{data?.results[0].overview}</OverView>
                        <PalyerWrapper>
                            <Player >
                                <FontAwesomeIcon icon={faPlay} size="2x" />
                                <p>재생</p>
                            </Player>
                            <MovieInfo onClick={onMovieModalClick}>
                                <FontAwesomeIcon icon={faCircleInfo} color='white' size='2x' />
                                <p>상세 정보</p>
                            </MovieInfo>
                        </PalyerWrapper>
                    </Banner>
                    <Slider movieType='Now Movie' data={data} />
                    <Slider movieType='Popular' data={Popular} />
                    <Slider movieType='Top Rated' data={RetedTv} />
                </>
            )
            }
        </Wrapper >
    )
}

export default Home;