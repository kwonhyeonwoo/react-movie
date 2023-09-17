import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    padding-bottom:50px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:rgba(255,255,255,0.4);
    font-size:15px;
`
export const HomeAddress = styled.address`
    margin-bottom:14px;
    text-align: center;
    line-height: 20px;
    span{
        display: block;
    }
`
export const Contact = styled.div`
    line-height: 24px;
    text-align: center;
    .phone ,.email{
        font-weight: bold;
       
    }
`
export const Conpyr = styled.p`
    margin-top:11px;
`

// Copyright 2023. Leesu All rights reserved.