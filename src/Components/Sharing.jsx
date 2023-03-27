import React from "react";
import { FacebookShareButton, TwitterShareButton, LineShareButton} from 'react-share';

const Sharing = () => {
    const shareUrl = 'https://example.com';
    const title = 'Example Title';
    return <>
        <FacebookShareButton url={shareUrl} quote={title} className="share-button" style={{ backgroundColor: "#4267b2 !important" }}>
            <i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook
        </FacebookShareButton>
        <TwitterShareButton className="share-button" style={{ top: "40%", backgroundColor: "#7399e5 !important" }}><i class="fa fa-twitter-square" aria-hidden="true"></i> Twitter</TwitterShareButton>
        <LineShareButton className="share-button" style={{ top: "50%", backgroundColor: "#7399e5 !important" }}><i class="fa fa-linkedin-square" aria-hidden="true"></i> Linkedin</LineShareButton>
    </>
}

export default Sharing