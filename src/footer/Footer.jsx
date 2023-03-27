import React, { useEffect, useState } from "react";
import './Footer.css'
import axios from "axios";
const clientId = "AQ-2GZEt7QTO8Udw2-dupOowuXzz-vRhBhroeC1oOQYZV70EuJwDSm8oR0GpIbEg-sF9VPfquOFgcfKa";
const secret = "EF4EsEvpmr3leQ_yGw8kVU4XyXnl6T9slSYJTrTicTQCj5Pg43oWITS1y29jhrrDmj5U5ogV3Zl2NX7T";
const auth = btoa(`${clientId}:${secret}`);

const Footer = () => {
  const [tokenPaypal, setTokenPaypal] = useState("");
  const handleBusinessLogic = async () => {
      const token= "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"
      const endpoint = 'https://api.openai.com/v1/';

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
      var r =  await axios.post(endpoint, { headers });
      console.log(r)
  }



  useEffect( () => {
  }, []);
    return (
        <footer>
            <div className="footer-content">
                <h3>Text Editor SPRING</h3>
                <p>Địa chỉ: M16, đường số 10</p>
                <div className="footer-bottom" style={{width:'100%'}}>
                </div>
                <p>Spring &copy;2022 </p>
            </div>
        </footer>
    );
}

export default Footer