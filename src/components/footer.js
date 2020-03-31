import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'

function Footer(props){
    return(
        
<footer>
  <div class="footer-social-icons text-center">

  
       {/* <a  style="color:#D3D3D3" href="#" target="_blank" class="fa fa-twitter fa-2x" itemprop="url"></a>&nbsp&nbsp&nbsp&nbsp
       
       <a style="color:#D3D3D3"  href="#" target="_blank" class="fa fa-linkedin fa-2x" itemprop="url" class="grey-text"></a>&nbsp&nbsp&nbsp&nbsp
       
       <a style="color:#D3D3D3"  href="#" target="_blank" class="fa fa-instagram fa-2x" itemprop="url"></a>&nbsp&nbsp&nbsp&nbsp

       <a style="color:#D3D3D3"  href="#" target="_blank" class="fa fa-facebook fa-2x" itemprop="url"></a>
       */}
  </div>

  <div class="footer-copyright text-center py-3">Copyright © 2019 Armslength
    <a href="https://mdbootstrap.com/education/bootstrap/">All rights reserved</a>
  </div>
  <div class="text-center">
    <p style={{textAlign:"center"}}  class="grey-text"></p>
    <a href={''} class="grey-text"><u>Privacy policy</u></a>&nbsp;&nbsp;|
    <a href={''} class="grey-text"><u>Terms of service</u></a>&nbsp;&nbsp;|
    <a href={''} class="grey-text"> <u>Service Agreement</u></a>&nbsp;&nbsp;|
    <a href={''} class="grey-text"><u>Contact us</u></a>&nbsp;&nbsp;
  </div>




</footer>

    );
}

export default Footer;