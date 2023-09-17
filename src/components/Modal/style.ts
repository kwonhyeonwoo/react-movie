import styled from "styled-components";


export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
`
export const ModalContent = styled.div`
    width:50%;
    height:70%;
    position: relative;
    top:50px;
    margin:  auto;
    background-color: #333;
    border-radius: 10px;
`
export const BackdropImg = styled.div<{ backdropImg: string }>`
    height:400px;
    border-radius:10px;
    background-image:
        linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),
        url(${(props) => props.backdropImg});
    background-size:cover;
    .cancel{
        color:white;
        font-size:28px;
        float:right;
        padding:20px;
        transition: transform .4s ease-in-out;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
        }
    }
`
export const MovieTitle = styled.h3`
    height:100%;
    padding-left:338px;
    padding-bottom:22px;
    display: flex;
    align-items: flex-end;
    font-size:38px;
    color:white;
    font-weight:bold;
`

export const MovieInfo = styled.div`
   display: flex;
`
export const MoviePosterImg = styled.img`
    height:400px;
    top:-200px;
    position:relative;
    left:50px;
    right:0;
    border-radius: 10px;
`
export const MovieDate = styled.h3`
    font-size:20px;
    color:rgba(255, 255, 255, 0.6);
    margin-right:10px;
`
export const MovieDateWrap = styled.div`
    height:100%;
    padding: 20px 80px;
    .date_container{
        display: flex;
        align-items: center;
        .average{
            color:white;
            font-size:14px;
            padding-left:4px;
        }
    }
    .filled{
        color: gold;
       
    }
`
export const OverView = styled.div`
    padding-top:20px;
    line-height: 20px;
    color:white;
`
