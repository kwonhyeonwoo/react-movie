import styled from "styled-components";

export const BgImage = styled.div<{ bgImge: string }>`
    width:300px;
    height:230px;
    margin-right:18px;
    position:visible;
    background-image:url(${(props) => props.bgImge});
    background-size: cover;
    z-index:-1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition:transform 0.3s ease-in-out,z-index 0.3s ;
    &:hover{
        transform: scale(1.3);
        p,h3{
            display:block;
            display: block;
        }
        
    }  
`