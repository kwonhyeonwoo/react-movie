import React, { useState } from "react";
import { Banner, Loader, MovieInfo, OverView, PalyerWrapper, Player, Title, Wrapper } from "../Home/style";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../Home/components/Slider/Slider";
import {
    faPlay,
    faCircleInfo

} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import { makeImagePath } from "../../utils";
import { getTv } from "../../api/getApi";
const Tv = () => {
    const { data, isLoading } = useQuery(['movies', 'nowPlaying'], getTv);
    const [movieModal, setMovieModal] = useState<boolean>(false);
    const onMovieModalClick = () => {
        setMovieModal((prev) => !prev);
    }
    console.log('tv', data)
    return (
        <Wrapper>
            {isLoading ? <Loader>Loading...</Loader> : (
                <>
                    {movieModal && <Modal onClick={onMovieModalClick} data={data?.results[0]} />}
                    <Banner imgUrl={makeImagePath(data?.results[0].backdrop_path || '')}>
                        <Title>{data?.results[0].name}</Title>
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
                </>
            )
            }
        </Wrapper>
    )
}

export default Tv;