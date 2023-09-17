import { ModalContent, ModalWrapper, MovieInfo, MoviePosterImg, MovieDate, MovieDateWrap, OverView, BackdropImg, MovieTitle } from "./style";
import { makeImagePath } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faX
} from "@fortawesome/free-solid-svg-icons";
import { IGetMoviesResult, IMovie } from "../Home/Home";


interface IModal {
    data: IGetMoviesResult | IMovie;
    onClick: () => void;
}

const Modal = ({ data, onClick }: IModal) => {
    // 별점 계산기
    const normalizedScore = Math.round(data?.vote_average ? data.vote_average / 2 : 0);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span className={`star ${i <= normalizedScore ? 'filled' : ''}`} key={i}>
                ★
            </span>
        );
    }

    // 년도만 보여주기위해서 slcie로 짤라버림 
    // const movieYear = data?.first_air_date.slice(0, 4) || data?.release_date.slice(0, 4);
    const movieYear = data?.first_air_date ? data?.first_air_date.slice(0, 4) : data?.release_date?.slice(0, 4);
    return (
        <>
            <ModalWrapper>
                <ModalContent>
                    <BackdropImg backdropImg={makeImagePath(data?.backdrop_path, 'w500')}>
                        <FontAwesomeIcon onClick={onClick} className='cancel' icon={faX} />
                        <MovieTitle>{data?.title}</MovieTitle>
                    </BackdropImg>
                    <MovieInfo>
                        <MoviePosterImg src={makeImagePath(data?.poster_path, 'w500')} />
                        <MovieDateWrap>
                            <div className='date_container'>
                                <MovieDate>{movieYear}</MovieDate>
                                {stars}<span className='average'>({data?.vote_average})</span>
                            </div>
                            <OverView>
                                {data?.overview ? data?.overview : 'There is no plot.'}
                            </OverView>
                        </MovieDateWrap>
                    </MovieInfo>
                </ModalContent>
            </ModalWrapper>

        </>

    )
}

export default Modal;

