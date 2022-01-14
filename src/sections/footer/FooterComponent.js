import React from "react";
import { Divider } from "@mui/material";
import useFooterComponentStyle from "./FooterComponentStyle";
import { Link } from 'react-router-dom';
import clsx from "clsx";
import RedirectLink from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
    const classes = useFooterComponentStyle();
    return (
        <React.Fragment>
            <div className={ clsx( classes.noMargin ) }>
                <div className={ classes.upperFooterBox }>
                    <div className={ clsx( classes.width, classes.displayFlexMdUp, classes.padding ) }>
                        <div
                            className={ clsx( classes.hideMdBelow, classes.containerWidth, classes.textColor ) }>
                            <h4 className={ classes.footerHeading }>Currently we ship to</h4>
                            <address className={ classes.footerLinks }>
                                Quebec city, QC <br/>
                            </address>
                        </div>
                        <div className={ clsx( classes.containerWidth ) }>
                            <h4 className={ clsx( classes.footerHeading, classes.hideMdBelow, classes.textColor ) }>Menu</h4>
                            <div>
                                <Link to={ "/" }>
                                    <h4 className={ classes.footerLinks }>Chatpta Home</h4>
                                </Link>
                            </div>
                            <Divider className={ classes.hideMdUp }/>
                            <div>
                                <Link to={ "/login" }>
                                    <h4 className={ classes.footerLinks }>Login</h4>
                                </Link>
                            </div>
                            <Divider className={ classes.hideMdUp }/>
                            <div>
                                <Link to={ "/orders" }>
                                    <h4 className={ classes.footerLinks }>My orders</h4>
                                </Link>
                            </div>
                            <Divider className={ classes.hideMdUp }/>
                        </div>
                        <div className={ clsx( classes.containerWidth ) }>
                            <h4 className={ clsx( classes.footerHeading, classes.hideMdBelow, classes.textColor ) }>Contact</h4>
                            <div className={ clsx( classes.textColor ) }>
                                <address className={ clsx( classes.footerLinks, classes.hideMdBelow ) }>
                                    Email: <a href="mailto:info@chatpta.ca">info@chatpta.ca</a>.<br/>
                                </address>
                                <Link to={ "/contact-us" }>
                                    <h4 className={ classes.footerLinks }>Contact us form</h4>
                                </Link>
                            </div>
                            <Divider className={ classes.hideMdUp }/>
                            <div className={ classes.socialMedia }>
                                <RedirectLink
                                    href={ "https://www.facebook.com/Chatpta/" }
                                    target="_blank"
                                    className={ classes.marginRightExceptLastChild }
                                >
                                    <IconButton aria-label="delete" className={ classes.paddingZero }>
                                        <FacebookIcon fontSize="large" className={ classes.facebookIcon }/>
                                    </IconButton>
                                </RedirectLink>
                                <RedirectLink
                                    href={ "https://www.twitter.com/Chatpta/" }
                                    target="_blank"
                                    className={ classes.marginRightExceptLastChild }
                                >
                                    <IconButton aria-label="delete" className={ classes.paddingZero }>
                                        <TwitterIcon fontSize="large" className={ classes.twitterIcon }/>
                                    </IconButton>
                                </RedirectLink>
                                <RedirectLink
                                    href={ "https://ca.linkedin.com/in/chatpta" }
                                    target="_blank"
                                    className={ classes.marginRightExceptLastChild }
                                >
                                    <IconButton aria-label="delete" className={ classes.paddingZero }>
                                        <LinkedInIcon fontSize="large" className={ classes.linkedInIcon }/>
                                    </IconButton>
                                </RedirectLink>
                                <RedirectLink
                                    href={ "https://www.youtube.com/channel/chatpta" }
                                    target="_blank"
                                >
                                    <IconButton aria-label="delete" className={ classes.paddingZero }>
                                        <YouTubeIcon fontSize="large" className={ classes.youTubeIcon }/>
                                    </IconButton>
                                </RedirectLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ classes.lowerFooterBox }>
                    <div className={ clsx( classes.width, classes.displayFlex ) }>
                        <Link to={ "/" }>
                            <h5 className={ clsx( classes.noMargin, classes.footerLinks ) }>© 2021, Chatpta.com,
                                Inc.</h5>
                        </Link>
                        <div className={ classes.moveLittle }>&nbsp; | &nbsp;</div>
                        <Link to={ "/privacy-statement" }>
                            <h5 className={ clsx( classes.noMargin, classes.footerLinks ) }>
                                Privacy statement
                            </h5>
                        </Link>
                        <div className={ classes.moveLittle }>&nbsp; | &nbsp;</div>
                        <Link to={ "/terms-of-use" }>
                            <h5 className={ clsx( classes.noMargin, classes.footerLinks ) }>
                                Terms and conditions
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
