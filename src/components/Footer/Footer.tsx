import React from "react";
import { Conpyr, Contact, Container, FooterWrapper, HomeAddress } from "./style";

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <HomeAddress>
                    <span>서울 관악구 봉천동 969-51</span>
                    <span>리더스 오피스텔 205호</span>
                </HomeAddress>
                <Contact>
                    <p><span className="phone">Phone</span> : 010-2814-1468</p>
                    <p><span className="email">Email</span> : khw19980926@gmail.com</p>
                </Contact>
                <Conpyr>
                    &copy; Conptyright 2023, hyeonwoo All right reserved
                </Conpyr>
            </Container>
        </FooterWrapper>
    )
}
export default Footer;