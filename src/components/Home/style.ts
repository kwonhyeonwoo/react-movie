import styled from "styled-components";

interface IBgUrl {
    imgUrl: string;
}


// best01 movie style
export const Wrapper = styled.div`
    background-color: black;
`
export const Loader = styled.div`
    padding-top:300px;
    color:white;
    font-size:40px;
    text-align: center;
`
export const Banner = styled.div<IBgUrl>`
    width:100%;
    height:100vh;
    background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url(${(props) => props.imgUrl});
    background-size:cover;
    padding:60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const OverView = styled.div`
    color:white;
    width:50%;
    font-size:19px;
`
export const Title = styled.h3`
    color:white;
    font-size:58px;
    margin-bottom:22px;
`

export const PalyerWrapper = styled.div`
    margin-top:30px;
    display:flex ;
    width:330px;
    justify-content: space-between;
`
export const Player = styled.div`
    width:144px;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgba(255,255,255,0.6);
    }
    p{
        font-size:18px;
        font-weight: bold;
        padding-left: 8px;
    }
`
export const MovieInfo = styled(Player)`
    background-color: rgba(109, 109, 110, 0.7);
    &:hover{
        background-color: rgba(109, 109, 110, 0.5);
        p,svg{
            opacity: 0.4;
        }
    }
    p{
        color:white;
    }
`
