import React, { useRef, useState } from "react";
import { Row, WrapperSliderBtn, OverView, MovieType } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { makeImagePath } from "../../../../utils";
import Modal from "../../../Modal/Modal";
import { PdWrapper } from "../../../common/Wrapper/PdWrapper";
import { BgImage } from "../../../common/BgImage/BgImage";
import { MovieLiTitle } from "../../../common/MovieLiTitle/MovieLiTitle";
import { IGetMoviesResult, IMovie } from "../../Home";

interface ISlider {
    data: IGetMoviesResult;
    movieType: string;
}

const Slider = ({ data, movieType }: ISlider) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    // data 유,무를 확인하기 위하여 null 로 저장
    const [movieInfo, setMovieInfo] = useState<IMovie | null>(null);

    // movie information toggle
    const movieInforToggle = (item?: IMovie) => {
        // item 매개변수로 전달을 받고 클릭 했는 영화정보를 가져옴
        if (item) {
            setMovieInfo(item);
        } else {
            setMovieInfo(null);
        }
    }

    // slide animation 
    const smoothScroll = (target: number, callback?: () => void) => {
        if (sliderRef.current) {
            let start = sliderRef.current.scrollLeft;
            let change = target - start;
            let duration = 800;
            let startTime = performance.now();

            const animateScroll = (currentTime: number) => {
                let timeElapsed = currentTime - startTime;
                let progress = timeElapsed / duration;

                if (start !== undefined && sliderRef.current) {
                    sliderRef.current.scrollLeft = start + change * progress;
                }

                if (timeElapsed < duration) {
                    requestAnimationFrame(animateScroll);
                } else {
                    if (callback) callback();  // 애니메이션 완료 후 callback 실행
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };

    // 이전으로 슬라이드 버튼
    const prevSlide = () => {
        if (sliderRef.current) {
            let currentScroll = sliderRef.current.scrollLeft;
            let itemWidth = sliderRef.current.offsetWidth;
            let prevScroll = currentScroll - itemWidth;
            const updateLastScroll = () => {

                sliderRef.current!.scrollLeft = prevScroll; // 위치 업데이트
            };
            if (prevScroll < 0) {
                prevScroll = sliderRef.current.scrollWidth - itemWidth;
            }
            smoothScroll(prevScroll, updateLastScroll);
        }
    };

    // 슬라이드 다음으로 넘기는 버튼
    const nextSlide = () => {
        if (sliderRef.current) {
            let currentScroll = sliderRef.current.scrollLeft;
            let itemWidth = sliderRef.current.offsetWidth;
            let nextScroll = currentScroll + itemWidth;

            const updateLastScroll = () => {
                sliderRef.current!.scrollLeft = nextScroll; // 위치 업데이트
            };

            if (nextScroll >= sliderRef.current.scrollWidth) {
                nextScroll = 0;
                smoothScroll(nextScroll, updateLastScroll);
            }
            smoothScroll(nextScroll, updateLastScroll);
        }
    };
    return (
        <div>
            {movieInfo && <Modal data={movieInfo} onClick={() => movieInforToggle()} />}

            {/* movie slider button */}
            <WrapperSliderBtn>
                {/* left slider btn */}
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="4x"
                    className='chevron-left'
                    onClick={prevSlide}
                />
                {/* right slider btn */}
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size="4x"
                    className='chevron-right'
                    onClick={nextSlide}
                />
            </WrapperSliderBtn>
            {/* movie slider  */}
            <PdWrapper >
                <MovieType>{movieType}</MovieType>
                <Row ref={sliderRef}>
                    {data?.results && data?.results.map((item: IMovie, idx: number) => {
                        return (
                            <>
                                {/* click movie information -> modal */}
                                <div key={idx} onClick={() => movieInforToggle(item)}>
                                    <BgImage bgImge={makeImagePath(item.backdrop_path, 'w300')}>
                                        <MovieLiTitle>{item.original_title ? item.original_title : item.name}</MovieLiTitle>
                                    </BgImage>
                                </div>
                            </>
                        )
                    })}
                </Row>
            </PdWrapper>
        </div>
    )
}
export default Slider;