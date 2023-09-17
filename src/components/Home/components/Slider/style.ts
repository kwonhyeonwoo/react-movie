import styled from "styled-components";

interface IBgUrl {
    imgUrl: string;
}


// slider row container 
export const Row = styled.div`
    display: flex; 
    height:372px;
    align-items: center;
    position:relative;
    overflow-y: hidden;
    /* background-color:  linear-gradient(to right, rgba(100,100,100,1), rgba(100,100,100,0)); */
`;


export const MovieType = styled.h3`
    font-size:29px;
    color:white;
    font-weight: bold;
`
export const OverView = styled.p`
    font-size:14px;
    color:white;
    display: none;
`

// left, right slider button style..
export const WrapperSliderBtn = styled.div`
    display:flex;
    position:relative;
    z-index:1;
    top:242px;
    svg{
        width:40px; 
        height:40px;
        padding: 10px;
        position:absolute;
        transition: transform 0.3s ease-in-out; /* 부드러운 확대/축소 효과 */
        color:white;
        border-radius:50px;
        background-color:rgba(0,0,0,0.6);
        &:hover{
            background-color:rgba(0,0,0,0.8);
            transform:scale(1.3);
        }
    }
    svg:nth-child(1){
        margin-right:auto;
        left:30px;
    }
    svg:nth-child(2){
       margin-left:auto;
       right:30px;
    }
`
