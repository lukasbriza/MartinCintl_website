import {Link} from 'react-router-dom'
import {socIconsMobileOn,socIconsMobileOff} from '../../Functions/AnimationManager'
import {useContext, useState, useEffect} from 'react'
import {PageContext} from '../../Functions/Context'
import {config} from '../../App/config'
import { SVGProps } from "react"

function SocialIcons(props:socialIcons){
  const context:any = useContext(PageContext)

  const [mobArrow, setMobArrow] = useState(false)

  useEffect(() => {
    if(mobArrow === true && window.innerWidth <768){
      console.log('1')
      socIconsMobileOn()
    }
    if(mobArrow === false && window.innerWidth <768){
      console.log('2')
      socIconsMobileOff()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[mobArrow])

  let pcStyleReset = {
    width: undefined,
    height: undefined
  }
  if(context.width < 768){
    return(
      <div id="socialIcons-mobile-wrapper">
          <Arrow onClick={()=>{setMobArrow(!mobArrow)}}/>
        <div id="socialIcons-wrapper" style={pcStyleReset}>
          <div id="socialIcons-section">
              <MailSmallIcon id="mailIcon" size={props.size} to={config.socialLinks.mail}/>
              <InstagramSmallIcon id="instagramIcon" size={props.size} to={config.socialLinks.instagram}/>
              <FacebookSmallIcon id="facebookIcon" size={props.size} to={config.socialLinks.facebook}/>
          </div>
        </div>
      </div>
    )
  }else{

    return(
      <div id="socialIcons-wrapper" style={pcStyleReset}>
          <div id="socialIcons-section">
              <MailSmallIcon id="mailIcon" size={props.size} to={config.socialLinks.mail}/>
              <InstagramSmallIcon id="instagramIcon" size={props.size} to={config.socialLinks.instagram}/>
              <FacebookSmallIcon id="facebookIcon" size={props.size} to={config.socialLinks.facebook}/>
          </div>
      </div>
    )
  }
}

function InstagramSmallIcon(props: socialIcon) {
  return (
    <a id="instagram-background" href={props.to} target="_blank" className="icon" rel="noreferrer">
      <svg
        height={props.size}
        viewBox="0 0 511 511.9"
        width={props.size}
        xmlns="http://www.w3.org/2000/svg"
        id={props.id}
        className="center"
      >
        <path fill="white" d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.934 130.934 0 0074.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5zm-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0" />
        <path fill="white" d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5zm0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3zm0 0M423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699zm0 0" />
      </svg>
    </a>
  )
}

function FacebookSmallIcon(props: socialIcon) {
    return (
      <a id="facebook-background" href={props.to} target="_blank" className="icon" rel="noreferrer">
        <svg
          height={props.size}
          viewBox="0 0 24 24"
          width={props.size}
          xmlns="http://www.w3.org/2000/svg"
          id={props.id}
          className="center"
        >
          <path fill="white" d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
        </svg>
      </a>
    )
}

function MailSmallIcon(props: socialIcon) {
    return (
      <Link id="mail-background" to={props.to} className="icon">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          height={props.size}
          width={props.size}
          id={props.id}
          className="center"
        >
          <path fill="white" d="M10.688 95.156C80.958 154.667 204.26 259.365 240.5 292.01c4.865 4.406 10.083 6.646 15.5 6.646 5.406 0 10.615-2.219 15.469-6.604 36.271-32.677 159.573-137.385 229.844-196.896 4.375-3.698 5.042-10.198 1.5-14.719C494.625 69.99 482.417 64 469.333 64H42.667c-13.083 0-25.292 5.99-33.479 16.438-3.542 4.52-2.875 11.02 1.5 14.718z" />
          <path fill="white" d="M505.813 127.406a10.618 10.618 0 00-11.375 1.542C416.51 195.01 317.052 279.688 285.76 307.885c-17.563 15.854-41.938 15.854-59.542-.021-33.354-30.052-145.042-125-208.656-178.917a10.674 10.674 0 00-11.375-1.542A10.674 10.674 0 000 137.083v268.25C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333v-268.25a10.66 10.66 0 00-6.187-9.677z" />
        </svg>
      </Link>
    )
}
  
function Arrow(props: SVGProps<SVGSVGElement>){
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      id="social-arrow"
      width={24} 
      height={24} 
      onClick={props.onClick}
      {...props}
    >
      <path fill="white" d="M22 12 2 24l5-12L2 0z" />
    </svg>
  )
}
export {
    SocialIcons
}