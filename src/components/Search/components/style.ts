import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top:110px;
`

export const SearchType = styled.div`
    font-size:24px;
    color:white;
    font-weight:bold;
    margin-bottom:30px;
`

export const SearchContainer = styled.div`
    width:89%;
    color:white;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    gap:10px;
`

export const PosterImage = styled.div<{ bgImg: string }>`
    width:250px;
    height:150px;
    border-radius:10px;
    background-image: url(${(props) => props.bgImg});
    background-size:cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition:transform 0.3s ease-in-out,z-index 0.3s ;
    &:hover{
        transform: scale(1.3);
        p{
            display:block;
            display: block;
        }
    }
`
