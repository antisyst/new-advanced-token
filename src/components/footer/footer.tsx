import { Text, Button, Link } from "@nextui-org/react";

export default function Footer() {
    return(
        <div className="extended-last-footer-element">
              <div className="first_mvJgtke">
              <Text h1 className="first-content">Contact</Text>
            </div>
            <div className="footer-prototype-content GJtn_6 jfRnE_mb7">
                <Text>
                If you're looking for a frontend developer who is passionate about creating intuitive user interfaces and delivering high-quality work, please don't hesitate to contact me. I look forward to hearing from you!
                </Text>
            </div>
            <Button  as={Link} color="primary" href="https://wa.me/994707030996" target="_blank">
                   Say Hello !
            </Button>
            <div className="creator-content_lastchild jRg_5mv">
                <Text h2>Developed & Designed by <span>Ramazan Azimli</span></Text>
                <Text h3>Copyright 2023 ©</Text>
            </div>
        </div>
    )
}